const express = require("express");
const registration = require("../Model/registration");
const router = express.Router();
const REGISTRATION = require("../Model/registration");
const SUBJECT = require("../Model/subjects");

router.get("/:id/:branch", async (req, res) => {
  const id = req.params.id;
  const branch = req.params.branch;
  try {
    const allUsers = await registration.find({ branch });
    res.json(allUsers);
  } catch (error) {
    res.json(error);
  }
});

router.get("/principal", async (req, res) => {
  const allUser = await REGISTRATION.find()
  res.json(allUser)
})

module.exports = router;