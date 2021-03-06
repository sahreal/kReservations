const mongoose = require("mongoose");
const {
  Bar,
  Riverside,
  RiversideSmoking,
  MainHall,
  Reservations
} = require("../../db/index");

let dbAccess =
  "mongodb+srv://guest:GHk4on6rNKW7Us6g@cluster0.i0avb.mongodb.net/Reservations?retryWrites=true&w=majority";

const uri = process.env.DB_ACCESS || dbAccess;

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

//Set each room to their total capacity to test making reservations
const maxCapacity = {
  MainHall: 34,
  Bar: 16,
  Riverside: 10,
  RiversideSmoking: 20
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
            return console.error(err, "PROMISE ERROR");
          } else {
            try {
              let capacity = await results.toObject();

              if (maxCapacity[room] >= capacity[time] + totalGuests) {
                res.send({ response: "available" }).status(201);
              } else {
                [time, "_id", "id"].forEach(item => delete capacity[item]);
                for (let timeSlot in capacity) {
                  let result = maxCapacity[room] - totalGuests;
                  if (result < 0 || !Number.isInteger(capacity[timeSlot])) {
                    delete capacity[timeSlot];
                  } else {
                    capacity[timeSlot] = result;
                  }
                }

                let final =
                  Object.keys(capacity).length === 0 ? "booked" : capacity;

                res
                  .send({ response: "unavailable", options: final })
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
    },
    clearRoom: async (req, res) => {
      let room = req.body.room;
      try {
        await region[room].collection.updateMany(
          {},
          {
            $set: {
              "6": 0,
              "6:30": 0,
              "7": 0,
              "7:30": 0,
              "8": 0,
              "8:30": 0,
              "9": 0,
              "9:30": 0
            }
          }
        );

        res.sendStatus(200);
      } catch (err) {
        console.log(err, "delete promise error");
      }
    }
  }
};
