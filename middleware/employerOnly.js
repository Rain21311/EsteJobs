function employerOnly(req, res, next) {
  if (req.user.role !== "employer" || !req.user.subscriptionActive) {
    return res.status(403).send("Employer access only");
  }
  next();
}

module.exports = employerOnly;
