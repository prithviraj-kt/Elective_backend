const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  _id: String,
  name: String,
  branch: String,
  email: String,
  phone: String,
  prof: { type: String, default: "" },
  profConfirm: { type: String, default: "" },

  open1: { type: String, default: "" },
  open1Confirm: { type: String, default: "" },

  open2: { type: String, default: "" },
  open2Confirm: { type: String, default: "" },
  password: String,
  cpassword: String,
});

const registration = mongoose.model("REGISTRATION", registrationSchema);

module.exports = registration;
