const mongoose = require("mongoose");

const electiveSchema = mongoose.Schema({
  _id: String,
  name: String,
  branch: String,
  email: String,
  phone: String,
  prof1: { type: String, default: "" },
  prof1Confirm: { type: String, default: "" },
  prof2: { type: String, default: "" },
  prof2Confirm: { type: String, default: "" },
  prof3: { type: String, default: "" },
  prof3Confirm: { type: String, default: "" },
  prof4: { type: String, default: "" },
  prof4Confirm: { type: String, default: "" },
  open1: { type: String, default: "" },
  open1Confirm: { type: String, default: "" },
  open2: { type: String, default: "" },
  open2Confirm: { type: String, default: "" },
  

  password: String,
  cpassword: String,
});

const elective = mongoose.model("ELECTIVE", electiveSchema);

module.exports = elective;