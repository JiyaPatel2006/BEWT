const express = require('express');
const mongoose = require('mongoose');
const facultyRoutes = require('./facultyroutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/facultyDB')
.then(() => console.log("Faculty connected"))
.catch(err => console.log(err));

app.use('/api/faculty', facultyRoutes);

app.listen(3000, () => {
    console.log("server start");
});
