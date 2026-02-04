if (!user.subscriptionActive) {
  user.role = "user";
  await user.save();
}
