const express = require("express");
const app = express();
const port = 3000;

// syntax of route handlers
// app.use("/route", [rH, rH], rH, rH)

app.use(
  "/user",
  (req, res, next) => {
    console.log("route handler 1");
    next();
    res.send("Hello from user 1");
  },
  (req, res) => {
    console.log("route handler 2");
    res.send("Hello from user 2");
  }
);

app.listen(port, () => {
  console.log(`Server is successfully listen at port ${port}`);
});
