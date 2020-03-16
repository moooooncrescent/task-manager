const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// установка схемы
const taskScheme = new Schema({
    executorMail: String,
    executorName: String,
    task: String,
});
module.exports = mongoose.model("Task", taskScheme);