const User = require("../models/User");

const register = async (req, res) => {

    try {

        const newUser = new User({
            fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
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

        if (user.password !== req.body.password) {
            return res.status(400).json({
                message: "Şifre hatalı"
            });
        }

        res.status(200).json({
            message: "Giriş başarılı"
        });

    } catch (err) {

        res.status(500).json({
            message: "Giriş başarısız"
        });

    }
};

module.exports = {
    register,
    login
};