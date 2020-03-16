const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("User", userScheme);