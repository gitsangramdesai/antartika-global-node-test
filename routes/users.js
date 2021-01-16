var express = require('express');
var router = express.Router();
const tblUser = require("../controllers/tblUser.js");


router.post("/register", tblUser.create);
router.post("/login", tblUser.login);
router.get("/userList", tblUser.userList);




module.exports = router;
