const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/registration");
const { body, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    body("email", "Enter valid email").isEmail(),
    body("_id", "ID cannot be blank").exists(),
    body("name", "Name cannot be blank").exists(),
    body("phone", "Enter a valid mobile number").isMobilePhone(),
    body("email", "Email cannot be blank").exists(),
    body("password", "Password cannot be blank").exists(),
    body("cpassword", "Confirm password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { _id, name, email, phone, branch, password, cpassword } = req.body;

    const existUser = await REGISTRATION.findById(_id);

    if (existUser) {
      return res.json({
        msg: "User already exists",
      });
    }

    const newUser = REGISTRATION.create({
      _id,
      name,
      email,
      phone,
      branch,
      password,
      cpassword,
    });
    res.json({
      msg: "User created successfully",
    });
  }
);

router.get("/login", [], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { usn, password } = req.body;

  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    if (existUser.password == password) {
      return res.json({
          msg:"User authenticted"
      });
    }else{
        return res.json({
            msg:"Invalid password"
        })
    }
  } else {
    return res.json({
      msg: "User does not exist",
    });
  }
});
module.exports = router;
