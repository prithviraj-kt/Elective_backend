const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/registration");
const SUBJECT = require("../Model/subjects");

const { body, validationResult } = require("express-validator");

router.post(
  "/edit/:usn",
  [
    body("email", "Enter valid email").isEmail(),
    body("name", "Name cannot be blank").exists(),
    body("phone", "Enter a valid mobile number").isMobilePhone(),
    body("email", "Email cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const usn = req.params.usn;
    const userData = req.body;

    const existUser = await REGISTRATION.findById(usn);

    if (!existUser) {
      return res.json({
        msg: "User does not exists",
      });
    }

    const newUser = await REGISTRATION.replaceOne({ _id: usn }, userData);
    res.json({
      msg: "User updated successfully",
    });
  }
);

router.post("/subject/:usn", async (req, res) => {
  const user = req.body;

  const usn = req.params.usn;
  try {
    const newUser = await REGISTRATION.replaceOne({ _id: usn }, user);

    const updateSubject = await SUBJECT
    req.json({
      msg: "Success",
    });
  } catch (error) {
    res.json({
      msg: "Failed update",
    });
  }
});

module.exports = router;
