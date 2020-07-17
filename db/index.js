const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MainHall = new Schema(
  {
    date: {
      type: String,
      "6": Number,
      "6:30": Number,
      "7": Number,
      "7:30": Number,
      "8": Number,
      "8:30": Number,
      "9": Number,
      "9:30": Number
    }
  },
  { collection: "MainHall" }
);

const Bar = new Schema(
  {
    date: {
      type: String,
      "6": Number,
      "6:30": Number,
      "7": Number,
      "7:30": Number,
      "8": Number,
      "8:30": Number,
      "9": Number,
      "9:30": Number
    }
  },
  { collection: "Bar" }
);

const Riverside = new Schema(
  {
    date: {
      type: String,
      "6": Number,
      "6:30": Number,
      "7": Number,
      "7:30": Number,
      "8": Number,
      "8:30": Number,
      "9": Number,
      "9:30": Number
    }
  },
  { collection: "Riverside" }
);

const RiversideSmoking = new Schema(
  {
    date: {
      type: String,
      "6": Number,
      "6:30": Number,
      "7": Number,
      "7:30": Number,
      "8": Number,
      "8:30": Number,
      "9": Number,
      "9:30": Number
    }
  },
  { collection: "RiversideSmoking" }
);

const Reservations = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    date: { type: String, required: true },
    time: { type: String, required: true },
    party: Number,
    region: { type: String, required: true },
    birthday: { type: String, name: String },
    children: String
  },
  { collection: "Reservations" }
);

module.exports.Reservations = mongoose.model("Reservations", Reservations);
module.exports.MainHall = mongoose.model("MainHall", MainHall);
module.exports.Bar = mongoose.model("Bar", Bar);
module.exports.Riverside = mongoose.model("Riverside", Riverside);
module.exports.RiversideSmoking = mongoose.model(
  "RiversideSmoking",
  RiversideSmoking
);
