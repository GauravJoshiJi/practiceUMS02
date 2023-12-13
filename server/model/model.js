const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: String,
  status: String,
});

const userSchema = mongoose.model("USM02", schema);
module.exports = userSchema;
