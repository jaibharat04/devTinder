const express = require("express");
const { adminAuth } = require("./middlewares/auth");
const app = express();
const port = 3000;

app.use("/admin", adminAuth);

app.use("/user", (req, res, next) => {
  res.send("user data sent");
});

app.use("/admin/getAllData", (req, res, next) => {
  res.send({ data: "This is the data you requested" });
});

app.use("/admin/deleteData", (req, res, next) => {
  res.send({ message: "Data deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is successfully listen at port ${port}`);
});
