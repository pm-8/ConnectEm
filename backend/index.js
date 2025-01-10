const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const protectedRoutes = require('./routes/protectedRoutes')
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
}));
app.use("/auth",authRoutes);
app.use("/protected",protectedRoutes);
app.use("/profile",profileRoutes);
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
    }
);