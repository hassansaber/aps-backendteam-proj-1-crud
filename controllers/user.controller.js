const UserModel = require("../model/user.model");

//--

//CRUD
// Create
const createUser = async (req, res) => {
  try {
    const userReq = new UserModel(req.body);
    const userResult = await userReq.save();
    res.status(201).json(userResult);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//--
module.exports = {
  createUser,
};
