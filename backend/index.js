const express = require('express');
const cors = require("cors");
const app = express();
const User = require('./models/User')
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to MongoDB Atlas');
});
app.get('/',(req,res)=>{
    res.send("HEY");
})
app.post('/register', async (req,res) => {
    try{
        const userDoc = await User.create(
            {
                firstName: req.body.firstName,
                lastName : req.body.lastName,
                gender: req.body.gender,
                email: req.body.email,
                password : req.body.password,
                Role: req.body.role
            }
        );
        res.send(userDoc);
    }catch(e){
        alert('Failed Submission');
        res.status(400).json(e);
    }
})
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
    }
);