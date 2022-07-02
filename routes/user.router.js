const router = require("express").Router();
const { createUser } = require("../controllers/user.controller");

//--

router.post("/new", createUser);

//--

module.exports = router;

// vaysaaaaa
// reqire ham doroste?
// chizi kam nist?
// check kon
