const express = require("express");
const app = express();
const port = 3000;

app.use("/test", (req, res) => {
  res.send("Hello, from Test!");
});

app.use("/hello", (req, res) => {
  res.send("Hello, hello, hello...");
});
app.use("/", (req, res) => {
  res.send("Hello, from Dashboard!");
});

app.listen(port, () => {
  console.log(`Server is successfully listen at port ${port}`);
});
