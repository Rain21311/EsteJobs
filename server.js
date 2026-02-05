const employerOnly = require("./middleware/employerOnly");

app.post("/jobs/create", employerOnly, (req, res) => {
  res.send("Job created successfully");
});

app.use("/jobs", require("./routes/jobs"));

// server.js
const express = require("express");
const app = express();

app.use(express.json());

// Mock database
let users = [
  { id: 1, role: "regular" }
];

app.post("/api/upgrade-to-employer", (req, res) => {
  const user = users[0]; // sample logged-in user

  user.role = "employer";

  res.status(200).json({
    message: "User upgraded to Employer"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

