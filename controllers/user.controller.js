const UserModel = require("../model/user.model");

//--

//CRUD
// Create
const createUser = async (req, res) => {
  try {
    const useNewModel = new UserModel(req.body);
    const userResult = await useNewModel.save();
    res.status(201).json(userResult);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//CRUD
// Read
const readUsers = async (req, res) => {
  try {
    const usersList = await UserModel.find({});
    res.status(200).json(usersList);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//CRUD
// Update
const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//CRUD
// Delete
const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//--
module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};
