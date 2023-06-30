const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("This is home page");
});

router.get("/about", (req, res) => {
  res.send("This is about page");
});

router.get("/contact", (req, res) => {
  res.send("This is contact page");
});

router.post("/signup", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(500).json({ error: "please fill all the fields" });
  }

  const userExit = await User.findOne({ email });

  if (userExit) {
    return res.status(500).json({ erroe: "This email already registered" });
  }

  try {
    const user = new User({ name, email, phone, work, password, cpassword });

    const saveData = await user.save();
    if (saveData) {
      res.status(201).json({ msg: "Successful" });
      res.cookie("jwt", token, {
        expires: new Data(Date.now() + 25892000000),
        httpOnly: true,
      });
    } else {
      res.status(500).json({ error: "Field registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ error: "Please fill all the field" });
    }
    const emailExit = await User.findOne({ email });

    if (emailExit) {
      const isMatching = await bcrypt.compare(password, emailExit.password);
      const token = await emailExit.generateAuthToken();
      if (isMatching) {
        res.status(201).json({ msg: "Login success" });
      } else {
        res.status(500).json({ error: "Please enter the correct password" });
      }
    } else {
      res.status(500).json({ error: "This email is not registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// {
//     "name":"satya",
//     "email": "satya@gmail.com",
//     "phone": "8280799142",
//     "work":"web developer",
//     "password":"123",
//     "cpassword":"123"
// }
