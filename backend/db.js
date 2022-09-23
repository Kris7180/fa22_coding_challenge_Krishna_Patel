const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      /* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
      "mongodb+srv://krisPat:5LRY0CzLiVFUO6K0@cluster0.emqn6vu.mongodb.net/?retryWrites=true&w=majority",
      {useNewUrlParser: true},
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};