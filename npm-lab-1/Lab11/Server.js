const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Userroutes = require('./Userroutes');
const Bookroutes = require('./Bookroutes');
const Issuedbookroutes = require('./Issuedbookroutes');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/libraryDB')
.then(() => console.log("library connected"))
.catch(err => console.log(err));

app.use('/api/book',Bookroutes );
app.use('/api/user', Userroutes);
app.use('/api/issuebook', Issuedbookroutes);
app.listen(3000, () => {
    console.log("server start");
});
