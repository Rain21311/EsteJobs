// routes/employer.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { companyName, businessType, contactInfo } = req.body;

  const user = await User.findById(req.user.id); // logged-in user

  // Save employer info but DO NOT change role yet
  user.employerProfile = {
    companyName,
    businessType,
    contactInfo
  };

  await user.save();

  // Redirect to subscription page
  res.redirect("/employer/subscribe");
});

module.exports = router;
