const express = require("express");
const router = express.Router();
const REGISTRATION = require("../Model/registration");

router.post("/:usn/prof/:branch/:subject", async (req, res) => {
  const usn = req.params.usn;
  const branch = req.params.branch;
  const subject = req.params.subject;

  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    if (existUser.prof == "") {
      const applyElective = await REGISTRATION.replaceOne(
        { _id: usn },
        {
          name: existUser.name,
          branch: existUser.branch,
          phone: existUser.phone,
          email: existUser.email,
          password: existUser.password,
          cpassword: existUser.cpassword,
          prof: subject,
        }
      );
      return res.json("Applied successfully");
    } else {
      return res.json({
        msg: " Contact admin to re-apply for professional Elective",
      });
    }
  } else {
    return res.json({
      msg: "User does not exist",
    });
  }
});

router.post("/:usn/open1/:branch/:subject", async (req, res) => {
  const usn = req.params.usn;
  const branch = req.params.branch;
  const subject = req.params.subject;

  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    if (branch == existUser.branch) {
      return res.json({
        msg: " You cannot apply to your same branch",
      });
    }
    if (existUser.open1 != "") {
      return res.json({
        msg: "Contact admin to re-apply for Open elective 1",
      });
    }
    const applyElective = await REGISTRATION.replaceOne(
      { _id: usn },
      {
        name: existUser.name,
        branch: existUser.branch,
        phone: existUser.phone,
        email: existUser.email,
        password: existUser.password,
        cpassword: existUser.cpassword,
        open1: subject,
        prof: existUser.prof,
      }
    );
    res.json(applyElective);
  } else {
    return res.json({
      msg: "USer does not exist",
    });
  }
});

router.post("/:usn/open2/:branch/:subject", async (req, res) => {
  const usn = req.params.usn;
  const branch = req.params.branch;
  const subject = req.params.subject;

  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    if (branch == existUser.branch) {
      return res.json({
        msg: " You cannot apply to your same branch",
      });
    }

    if (existUser.open2 != "") {
      return res.json({
        msg: "Contact admin to re-apply for Open elective 2",
      });
    }
    const applyElective = await REGISTRATION.replaceOne(
      { _id: usn },
      {
        name: existUser.name,
        branch: existUser.branch,
        phone: existUser.phone,
        email: existUser.email,
        password: existUser.password,
        cpassword: existUser.cpassword,
        open2: subject,
        prof: existUser.prof,
        open1: existUser.open1,
      }
    );
    res.json(applyElective);
  } else {
    return res.json({
      msg: "USer does not exist",
    });
  }
});

module.exports = router;
