var express = require('express');
var router = express.Router();
const tblUser = require("../controllers/tblUser.js");
const authJWT = require("../middleware/jwt.js");


router.post("/register", tblUser.create);
router.post("/login", tblUser.login);
router.get("/userList",authJWT.authenticateJWT, tblUser.userList);




module.exports = router;
