const mongoose = require("mongoose");
const {
  Bar,
  Riverside,
  RiversideSmoking,
  MainHall,
  Reservations
} = require("../../db/index");
const uri = require("../../config/keys").mongoURI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const region = {
  MainHall: MainHall,
  Bar: Bar,
  Riverside: Riverside,
  RiversideSmoking: RiversideSmoking
};

const maxCapacity = {
  MainHall: 84,
  Bar: 12,
  Riverside: 56,
  RiversideSmoking: 30
};

module.exports = {
  commands: {
    getAll: (req, res) => {
      let date = req.query.date;
      let room = req.query.region;
      let time = req.query.time;
      let totalGuests =
        parseInt(req.query.party) + parseInt(req.query.children);
      region[room]
        .findOne({ id: date }, async function(err, results) {
          if (err) {
            return console.error(err);
          } else {
            try {
              let capacity = await results.toObject();
              if (maxCapacity[room] > capacity[time] + totalGuests) {
                res.send({ response: "available" }).status(201);
              } else {
                [time, "_id", "id"].forEach(item => delete capacity[item]);
                for (let timeSlot in capacity) {
                  let result = maxCapacity[room] - capacity[timeSlot];
                  if (result <= 0 || !Number.isInteger(capacity[timeSlot])) {
                    delete capacity[timeSlot];
                  } else {
                    capacity[timeSlot] = result;
                  }
                }

                res
                  .send({ response: "unavailable", options: capacity })
                  .status(201);
              }
            } catch (err) {
              console.log(err, "Get promise error");
            }
          }
        })
        .exec();
    },
    update: (req, res) => {
      let date = req.body.date;
      let room = req.body.region;
      let time = req.body.time;
      let totalGuests = Number(req.body.party) + Number(req.body.children);

      region[room].collection.findOneAndUpdate(
        { id: date },
        { $inc: { [time]: totalGuests } },
        { new: true },
        async function(err, results) {
          if (err) {
            return console.error(err);
          } else {
            try {
              res.status(201);
            } catch (err) {
              console.log(err, "Get promise error");
            }
          }
        }
      );
    }
  }
};
