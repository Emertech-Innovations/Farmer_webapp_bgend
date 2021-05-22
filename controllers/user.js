const User = require("../models/user");

exports.register = async function (req, res) {
  try {
    const {
      name,
      address,
      aadhar,
      dob,
      age,
      state,
      district,
      tahshil,
      village,
      pin_code,
      email,
      phone,
      alternate_phone,
      area,
      soil,
      crops,
    } = req.body;
    const newUser = new User({
      name,
      address,
      aadhar,
      dob,
      age,
      state,
      district,
      tahshil,
      village,
      pin_code,
      email,
      phone,
      alternate_phone,
      area,
      soil,
      crops,
    });
    await newUser.save();
    return res.send({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAll = async function (req, res) {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    console.log(err);
  }
};