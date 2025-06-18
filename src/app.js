const express = require("express");
const app = express();
const port = 3000;

app.use("/user", (req, res) => {
  res.send("Hello User");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Jai", SecondName: "Bharat" });
});

app.post("/user", (req, res) => {
  res.send("Data successfully send to the database");
});

app.delete("/user", (req, res) => {
  res.send("Data successfully deleted from the database");
});

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
