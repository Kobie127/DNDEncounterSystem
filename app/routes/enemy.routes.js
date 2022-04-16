module.exports = app => {
    const enemy = require("../controllers/enemy.controller.js");
    var router = require("express").Router();

    // Create a new enemy 
    router.post("/", enemy.create);
    router.post("/:enemyId", enemy.createResistance);
    router.get("/", enemy.findAll);
    router.get("/:name", enemy.findOne);
    app.use('/api/enemy', router);
};;