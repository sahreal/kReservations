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
      console.log(req.query);
      let date = req.query.date;
      let room = req.query.region;
      let time = req.query.time;
      region[room]
        .findOne({ id: date }, async function(err, results) {
          if (err) {
            return console.error(err);
          } else {
            try {
              let temp = await results.toObject();

              console.log(temp[time], "avail");
              res.send(temp).status(201);
            } catch (err) {
              console.log(err, "Get promise error");
            }
          }
        })
        .exec();
    }
  }
};
