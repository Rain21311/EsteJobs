// routes/subscription.js
router.post("/subscribe", async (req, res) => {
  const user = await User.findById(req.user.id);

  // Simulate successful payment
  user.role = "employer";
  user.subscriptionActive = true;

  await user.save();

  res.redirect("/employer/dashboard");
});
