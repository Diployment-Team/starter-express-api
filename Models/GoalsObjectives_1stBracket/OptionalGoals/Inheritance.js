const Mongoose = require("mongoose");

const InheritanceSchema = new Mongoose.Schema({
  // id:{
  //     type: Number
  // },
  Email: {
    type: String,
  },
  AreaOfAdvice: {
    type: String,
  },
  When: {
    type: String,
  },
  EstimatedAmount: {
    type: Number,
  },
  Description: {
    type: String,
  },
});

module.exports = Mongoose.model("InheritanceSchema", InheritanceSchema);