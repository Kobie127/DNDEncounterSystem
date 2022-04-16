module.exports = app => {
    const enemy = require("../controllers/enemy.controller.js");
    var router = require("express").Router();

    // Create a new enemy 
    router.post("/", enemy.create);
    router.post("/resistance/:enemyId", enemy.createResistance);
    router.post("/vulnerability/:enemyId", enemy.createVulnerability);
    router.post("/immunity/:enemyId", enemy.createImmunities);
    router.get("/", enemy.findAll);
    router.get("/:name", enemy.findOne);
    app.use('/api/enemy', router);
};;