const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const authenticate = require("../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
