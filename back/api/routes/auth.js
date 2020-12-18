const express = require("express");
const passport = require("passport");
const userController = require("../controllers/userController");
const router = express.Router();

//register
router.post("/register", userController.register);

//login
router.post("/login", passport.authenticate("local"), userController.login);

//logout
router.post("/logout", userController.logout);

//verify that the user is logged in
router.get("/me", userController.me);

//error handler
router.use("/", userController.error);

module.exports = router;
