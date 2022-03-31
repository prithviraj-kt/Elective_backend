const express = require("express");
const router = express.Router();
const ELECTIVE = require("../Model/elective");
const REGISTRATION = require("../Model/registration");

router.post("/:usn/prof1/:branch/:subject", async (req, res) => {
  const usn = req.params.usn;
  const branch = req.params.branch;
  const subject = req.params.subject;

  const existUser = await REGISTRATION.findById(usn);
  if (existUser) {
    // if (existUser.prof1 == "") {
    const applyElective = await ELECTIVE.replaceOne(
      { _id: usn },
      {
        name: existUser.name,
        branch: existUser.branch,
        phone: existUser.phone,
        email: existUser.email,
        password: existUser.password,
        cpassword: existUser.cpassword,
        prof1: subject,
      }
    );
    return res.json("Applied successfully");
    // } else {
    //   return res.json({
    //     msg: " Contact admin to re-apply for professional Elective",
    //   });
    // }
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
        prof1: existUser.prof1,
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
        prof1: existUser.prof1,
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

router.post("/:usn/prof2/:branch/:subject", async (req, res) => {
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

    if (existUser.prof2 != "") {
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
        prof2: subject,
        prof1: existUser.prof1,
        open1: existUser.open1,
        open2: existUser.open2,
      }
    );
    res.json(applyElective);
  } else {
    return res.json({
      msg: "USer does not exist",
    });
  }
});

router.post("/:usn/open3/:branch/:subject", async (req, res) => {
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

    if (existUser.open3 != "") {
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
        prof2: existUser.prof2,
        prof1: existUser.prof1,
        open1: existUser.open1,
        open2: existUser.open2,
        open3: subject,
      }
    );
    res.json(applyElective);
  } else {
    return res.json({
      msg: "USer does not exist",
    });
  }
});

router.post("/:usn/open4/:branch/:subject", async (req, res) => {
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

    if (existUser.open4 != "") {
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
        prof2: existUser.prof2,
        prof1: existUser.prof1,
        open1: existUser.open1,
        open2: existUser.open2,
        open3: existUser.open3,
        open4: subject,
      }
    );
    res.json(applyElective);
  } else {
    return res.json({
      msg: "USer does not exist",
    });
  }
});

router.post("/:usn/open5/:branch/:subject", async (req, res) => {
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

    if (existUser.open5 != "") {
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
        prof2: existUser.prof2,
        prof1: existUser.prof1,
        open1: existUser.open1,
        open2: existUser.open2,
        open3: existUser.open3,
        open4: existUser.open4,
        open5: subject,
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
