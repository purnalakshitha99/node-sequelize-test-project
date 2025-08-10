const sequelize = require("../config/database.js");

// Import models
const User = require("./User");
// const Post = require("./Post"); // add more models here

// Define associations if needed
// Example:
// User.hasMany(Post);
// Post.belongsTo(User);

const db = {
  sequelize,
  User,
  // Post
};

// Export the db object containing all models

module.exports = db;
