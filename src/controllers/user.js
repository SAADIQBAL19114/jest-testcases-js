const { user } = require('../models');

//------------User Model Work(POST) POST A NEW USER IN THE DATABASE------------

const handlePostUser = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    if (name != '' && email != '' && role != '') {
      const user1 = await user.create({ name, email, role });
      return res.status(201).json(user1);
      
    }
    return res.status(400).json('Fields can not be empty');
  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
};

//------------User Model Work(GET) GET All USER IN THE DATABASE------------

const handleGetAllUser = async (req, res) => {
  try {
    const users = await user.findAll();
    if (users != '') {
      return res.status(200).json(users);
    } else {
      return res.status(400).json('no user in the database');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//------------User Model Work(DELETE) A USER IN THE DATABASE------------

const handleDeleteUser = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user1 = await user.findOne({ where: { uuid } });
    if (!user1) {
      return res
        .status(404)
        .send({ message: "There isn't any user of this id exists." });
    }
    await user1.destroy();
    return res.status(200).json('user deleted succesfully');
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//------------User Model Work(EDIT) A USER IN THE DATABASE------------

const handleEditUser = async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user1 = await user.findOne({ where: { uuid } });
    if (!user1) {
      return res
        .status(400)
        .json({ message: "There isn't any user of this id exists." });
    }
    user1.name = name;
    user1.email = email;
    user1.role = role;
    user1.save();
    return res.status(201).json(user1);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//------------User Model Work(GET) A USER USING HIS ID IN THE DATABASE------------

const handleGetOneUser = async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const user1 = await user.findOne({ where: { uuid } });

    if (!user1) {
      return res
        .status(404)
        .send({ message: `Book with id ${uuid} not found.` });
    }
    return res.status(200).json(user1);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//------------User Model Work(GET) A USER WITH ALL HIS POSTS IN THE DATABASE------------

const handleUserWithPost = async (req, res) => {
  console.log('this is a test text');
  try {
    const user1 = await user.findAll({ include: 'post' });
    return res.status(200).json(user1);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const handleUserWithPosts = async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const user1 = await user.findOne({ where: { uuid }, include: 'post' });
    return res.status(200).json(user1);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  handlePostUser,
  handleGetAllUser,
  handleDeleteUser,
  handleEditUser,
  handleGetOneUser,
  handleUserWithPost,
  handleUserWithPosts,
};
