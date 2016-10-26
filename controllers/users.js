const User = require('../models/user');


function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: "Error in the index" });
    return res.status(200).json(users);
  });
}

function usersShow(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(200).json(user);
  });
}

function usersCreate(req, res) {
  User.create((err, user) => {
    if (err) return res.status(500).json({ message: "Error on Create." });
    return res.status(200).json(user);
  });
}


function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true },  (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json(user);
  });
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(204).send();
  });
}

module.exports = {
  index:  usersIndex,
  show:   usersShow,
  create: usersCreate,
  update: usersUpdate,
  delete: usersDelete
};