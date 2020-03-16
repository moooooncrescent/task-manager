const Task = require("../models/task");

exports.addTask = function (request, response) {
    response.render("createTask.hbs");
};
exports.editTask = function (request, response) {
    const id = request.params.id;

    Task.findById(id, function (err, foundTask) {

        response.render("edit.hbs", { task: foundTask });
    });
};
exports.postEditTask = function (request, response) {

    const id = request.params.id;
    const editTask = { task: request.body.task, name: request.body.name }

    Task.findByIdAndUpdate(id, editTask, function (err) {
        if (err) return response.sendStatus(400);
        response.redirect("/admin");
    });
};
exports.deleteTask = function (request, response) {

    const id = request.params.id;

    Task.findByIdAndDelete(id, function (err) {
        if (err) return response.sendStatus(400);
        response.redirect("/admin");
    });
};

exports.postTask = function (request, response) {
    if (!request.body)
        return response.sendStatus(400);
    const executorName = request.body.name;
    const executorEmail = request.body.email;
    const task = request.body.task;
    const newTask = new Task({ email: executorEmail, executorName: executorName, task: task });

    newTask.save(function (err) {
        if (err) return console.log(err);
        response.redirect("/admin");
    });
};

exports.getTasks = function (request, response) {

    Task.find({}, function (err, allTasks) {

        if (err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("tasks.hbs", {
            tasks: allTasks
        });
    });
};
exports.getTasksAdmin = function (request, response) {

    Task.find({}, function (err, allTasks) {

        if (err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("admin.hbs", {
            tasks: allTasks
        });
    });
};



exports.getTask = function (request, response) {

    const executorName = request.local.name;
    const task = request.local.task;
    return Task
        .findOne({ name: executorName, task: task })
        .then(function (doc) {
            if (doc.executorName == name) {
                response.render("createTask.hbs");
            }
            else {
                console.log("err");
            }
        })
};


