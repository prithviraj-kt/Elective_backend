const express = require("express");
const router = express.Router();
const SUBJECT = require("../Model/subjects");
const REGISTRATION = require("../Model/registration");
const { body, validationResult } = require("express-validator");

router.post(
  "/addsubject/:id",
  [
    body("_id", "ID cannot be blank").exists(),
    body("courseTitle", "courseTitle cannot be blank").exists(),
    body("courseType", "courseType cannot be blank").exists(),
    body("duration", "duration cannot be blank").exists(),
    body("creditPoints", "creditPoints cannot be blank").exists(),
    body("branch", "branch cannot be blank").exists(),
    body("indendedAudience", "indendedAudience cannot be blank").exists(),
    body("preRequisites", "preRequisites cannot be blank").exists(),
    body("courseLayout", "courseLayout cannot be blank").exists(),
    body("courseObjective", "courseObjective cannot be blank").exists(),
    body("courseOutcome", "courseOutcome cannot be blank").exists(),
    body("pedagogy", "pedagogy cannot be blank").exists(),
    body("books", "books cannot be blank").exists(),
    body("referenceBooks", "referenceBooks cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;

    const {
      _id,
      courseTitle,
      courseType,
      duration,
      creditPoints,
      branch,
      indendedAudience,
      preRequisites,
      courseLayout,
      courseObjective,
      courseOutcome,
      pedagogy,
      books,
      referenceBooks,
    } = req.body;

    const existSubject = await SUBJECT.findById(_id);
    if (existSubject) {
      return res.json({
        msg: " Subject already added ",
      });
    }

    try {
      const addSubject = await SUBJECT.create({
        _id,
        courseTitle,
        branch,
        courseType,
        duration,
        creditPoints,
        indendedAudience,
        preRequisites,
        courseLayout,
        courseObjective,
        courseOutcome,
        pedagogy,
        books,
        referenceBooks,
      });

      res.json({
        msg: "Subject added successfully",
      });
    } catch (error) {
      res.json({
        msg: "Error occured",
      });
    }
  }
);

router.post(
  "/updatesubject/:id/:subid",
  [
    body("_id", "ID cannot be blank").exists(),
    body("courseTitle", "courseTitle cannot be blank").exists(),
    body("courseType", "courseType cannot be blank").exists(),
    body("duration", "duration cannot be blank").exists(),
    body("creditPoints", "creditPoints cannot be blank").exists(),
    body("branch", "branch cannot be blank").exists(),
    body("indendedAudience", "indendedAudience cannot be blank").exists(),
    body("preRequisites", "preRequisites cannot be blank").exists(),
    body("courseLayout", "courseLayout cannot be blank").exists(),
    body("courseObjective", "courseObjective cannot be blank").exists(),
    body("courseOutcome", "courseOutcome cannot be blank").exists(),
    body("pedagogy", "pedagogy cannot be blank").exists(),
    body("books", "books cannot be blank").exists(),
    body("referenceBooks", "referenceBooks cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.subid;

    const {
      courseTitle,
      courseType,
      duration,
      creditPoints,
      branch,
      indendedAudience,
      preRequisites,
      courseLayout,
      courseObjective,
      courseOutcome,
      pedagogy,
      books,
      referenceBooks,
    } = req.body;

    const existSubject = await SUBJECT.findById(id);
    if (!existSubject) {
      return res.json({
        msg: "Subject does not exist",
      });
    }

    try {
      const updateSubject = await SUBJECT.replaceOne(
        { _id: id },
        {
          courseTitle,
          branch,
          courseType,
          duration,
          creditPoints,
          indendedAudience,
          preRequisites,
          courseLayout,
          courseObjective,
          courseOutcome,
          pedagogy,
          books,
          referenceBooks,
        }
      );

      res.json({
        msg: "Subject updated successfully",
      });
    } catch (error) {
      res.json(error.message);
    }
  }
);

router.delete("/deletesubject/:id", async (req, res) => {
  const id = req.params.id;

  const existSubject = await SUBJECT.findById(id);
  if (!existSubject) {
    return res.json({
      msg: "Subject does not exist",
    });
  }

  try {
    const deleteSubject = await SUBJECT.deleteOne({ _id: id });

    res.json({
      msg: "Subject deleted successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/getallsubjects/:branch/:id", async (req, res) => {
  const branch = req.params.branch;
  const id = req.params.id;

  const existUser = await REGISTRATION.findById(id);
  if (!existUser) {
    return res.json({
      msg: "User does not exits",
    });
  }
  try {
    const getSubjects = await SUBJECT.find({ branch });
    res.json(getSubjects);
  } catch (error) {
    res.json({
      msg: "Error occured",
    });
  }
});

router.get("/getsubject/:branch/:id/:subid", async (req, res) => {
  const branch = req.params.branch;
  const id = req.params.id;
  const subid = req.params.subid;

  const existUser = await REGISTRATION.findById(id);
  if (!existUser) {
    return res.json({
      msg: "User does not exits",
    });
  }

  try {
    const getSubjects = await SUBJECT.findById(subid);
    if (getSubjects) {
      return res.json(getSubjects);
    } else {
      return res.json({
        msg: "Subject does not exist",
      });
    }
  } catch (error) {
    res.json({
      msg: "Error occured",
    });
  }
});

router.get('/getSubject/:ele/:sub', async (req, res) => {

  const ele = req.params.ele;

  const sub = req.params.sub;

  const books = await REGISTRATION.find({[ele]:sub}).count();

  res.json(books);

})

module.exports = router;
