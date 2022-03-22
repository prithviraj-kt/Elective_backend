const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/registration");
const { body, validationResult } = require("express-validator");

router.get("/profile/:usn", async (req, res) => {
  const usn = req.params.usn;
  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    return res.json(existUser);
  } else {
    return res.json({
      msg: "User does not exist",
    });
  }
});



module.exports = router;
