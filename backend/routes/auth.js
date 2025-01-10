const express = require('express');
const router = express.Router();
const cors = require("cors");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

router.use(cors({
    credentials: true, // Allow cookies
}));
router.use(express.json());

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(req.body.password, salt);
        const userDoc = await User.create({
            username: req.body.username,
            fullName: req.body.fullname,
            gender: req.body.gender,
            email: req.body.email,
            password: hashedPassword,
            Role: req.body.role
        });
        res.send(userDoc);
    } catch (e) {
        console.log('Failed Submission');
        console.error(e);
        res.status(400).json(e);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const userDoc = await User.findOne({ username });
        if (!userDoc) {
            return res.status(400).json({ error: 'User not found' });
        }
        const passOk = await bcryptjs.compare(password, userDoc.password);
        if (passOk) {
            console.log("User logged in");
            const token = jwt.sign({ username, id: userDoc._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true }).json({ message: 'Login Successful', token });
        } else {
            console.log("Wrong Password");
            res.status(404).json({ error: "Wrong Credentials" });
        }
    } catch (e) {
        console.error("Error during login", e); // Fixed typo
        res.status(500).json({ error: 'INTERNAL SERVER ERROR' });
    }
});

module.exports = router;