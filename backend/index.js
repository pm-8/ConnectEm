const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth')
app.use(express.json());
app.use(cors());
app.use("/auth",authRoutes);
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
    }
);