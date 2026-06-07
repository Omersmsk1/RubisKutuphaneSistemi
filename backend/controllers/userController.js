const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

  try {

    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    const newUser = new User({
      fullName: req.body.fullName,
      studentNo: req.body.studentNo,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: "student"
    });

    await newUser.save();

    res.status(201).json({
      message: "Kullanıcı oluşturuldu"
    });

  } catch (err) {

    res.status(500).json({
      message: "Kayıt işlemi başarısız"
    });

  }
};

const login = async (req, res) => {

  try {

    const user = await User.findOne({
      username: req.body.username
    });

    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı bulunamadı"
      });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Şifre hatalı"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.status(200).json({
      message: "Giriş başarılı",
      token: token,
      username: user.username,
      studentNo: user.studentNo,
      role: user.role
    });

  } catch (err) {

    res.status(500).json({
      message: "Giriş başarısız"
    });

  }
};

const getUsers = async (req, res) => {

  try {

    const users = await User.find(
      {},
      "-password"
    );

    res.json(users);

  } catch (err) {

    res.status(500).json({
      message: "Kullanıcılar getirilemedi"
    });

  }
};

module.exports = {
  register,
  login,
  getUsers
};