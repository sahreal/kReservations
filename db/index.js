const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Week = new Schema(
  {
    date: {
      type: String,
      time: {
        type: String,
        MainHall: Number,
        Bar: Number,
        Riverside: Number,
        RiversideSmoking: Number
      }
    }
  },
  { collection: "Week" }
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

module.exports.Week = mongoose.model("Week", Week);
module.exports.Reservations = mongoose.model("Reservations", Reservations);
