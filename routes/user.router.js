const router = require("express").Router();
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

//--

router.post("/new", createUser);
// http://localhost:8000/api/v1/user/new

router.get("/", readUsers);
// http://localhost:8000/api/v1/user/

router.put("/:id", updateUser);
// http://localhost:8000/api/v1/user/62c09f80bd1b396fdabe26e9

router.delete("/:id", deleteUser);
// http://localhost:8000/api/v1/user/62c09f80bd1b396fdabe26e9

//--
module.exports = router;
