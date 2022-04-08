module.exports = app => {
    const enemy = require("../controllers/enemy.controller.js");
    var router = require("express").Router();

    // Create a new enemy 
    router.post("/", enemy.create)
    app.use('/api/enemy', router);
};;