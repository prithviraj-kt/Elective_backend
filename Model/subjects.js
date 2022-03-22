const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  _id: String,
  courseTitle: String,
  branch:String,
  courseType:String,
  duration:String,
  creditPoints:String,
  indendedAudience:String,
  preRequisites:String,
  courseLayout:String,
  courseObjective:String,
  courseOutcome:String,
  pedagogy:String,
  books:String,
  referenceBooks:String
});

const subject = mongoose.model("SUBJECT", subjectSchema);

module.exports = subject;
