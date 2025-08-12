const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const authenticate = require("../middleware/auth.js");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/users-all", authenticate, authController.getAllUsers);
router.delete("/users/:id", authenticate, authController.deleteUserById);

module.exports = router;
