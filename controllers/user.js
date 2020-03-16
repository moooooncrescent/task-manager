const User = require("../models/user");

exports.addUser = function (request, response){
    response.render("reg.hbs");
};

exports.preCheck = function (request, response){
    response.render("login.hbs");
};
exports.checkUser = function(request, response) {
 
    const email = request.body.email;
    const password = request.body.password;
    return User
    .findOne({email: email})
    .then(function(doc){
    if ( doc.password == password ){
        response.redirect("/admin");
    } 
    else {
        console.log("err");
    }
    })
};


exports.postUser= function(request, response){
    if(!request.body) 
        return response.sendStatus(400);
    const username = request.body.name;
    const email = request.body.email;
    const password = request.body.password;
    const user = new User({name: username, email: email, password: password});
     
    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/tasks");
    });
};