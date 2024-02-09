const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://oto:otomate@cluster0.mrbzvso.mongodb.net/?retryWrites=true&w=majority').then((con) => {
    console.log("DB connection succesful")
})

app.listen(8000, () => {
    console.log("App connected")
})