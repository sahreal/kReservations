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

module.exports.Week = mongoose.model("Week", Week);
