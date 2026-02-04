const employerOnly = require("./middleware/employerOnly");

app.post("/jobs/create", employerOnly, (req, res) => {
  res.send("Job created successfully");
});

app.use("/jobs", require("./routes/jobs"));
