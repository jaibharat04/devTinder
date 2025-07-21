const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:CVXrGcjWNA8DXqpa@namastenode.zqhko.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
