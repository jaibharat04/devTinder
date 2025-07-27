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

// get user by e-mail id

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Error fetching user:" + error.message);
  }
});

// FEED API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(404).send("No users found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Error fetching user:" + error.message);
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
