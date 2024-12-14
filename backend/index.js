const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('Connected to MongoDB');
});


app.get('/login', (req, res) => {
    
    }
);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
    }
);