const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  body("name").isLength({ min: 2 }),
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }), //password must contain min of 5 character
  async (req, res) => {
    console.log(
      req.body.name,
      req.body.password,
      req.body.email,
      req.body.location
    );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }), //password must contain min of 5 character
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct Email ID" });
      }

      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Try logging in with correct Password" });
      }

      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
