const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/registration");
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

    const usn = req.params.usn
    const { name, email, phone, branch } = req.body;

    const existUser = await REGISTRATION.findById(usn);

    if (!existUser) {
      return res.json({
        msg: "User does not exists",
      });
    }

    const newUser = await REGISTRATION.replaceOne(
      { _id: usn },
      {
        name,
        email,
        phone,
        branch,
        prof:existUser.prof,
        open1: existUser.open1,
        open2: existUser.open2,
        password: existUser.password,
        cpassword: existUser.cpassword
      }
    );
    res.json({
      msg: "User updated successfully",
    });
  }
);

module.exports = router;
