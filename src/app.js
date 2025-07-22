const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);

  // creating the new instance of the user model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Error saving the user:" + error.message);
  }
});

// First the db is connected then only the server is listen at port
connectDB()
  .then(() => {
    console.log("Database connect successfully");
    app.listen(port, () => {
      console.log(`Server is successfully listen at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("db cannot connected");
  });
