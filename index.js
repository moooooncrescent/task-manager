const express = require('express');
const mongoose = require("mongoose");
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
const bodyParser = require('body-parser');

const app = express();


app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", userRouter);
app.use("/", taskRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

mongoose.connect("mongodb://localhost:27017/task-manager", { useNewUrlParser: true }, function (err) {
    if (err) return console.log(err);
    app.listen(3000, function () {
        console.log("Server started");
    });
});