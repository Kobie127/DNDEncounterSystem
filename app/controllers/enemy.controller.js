const db = require("../models");
const Enemy = db.enemy;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name || !req.body.health) {
        res.status(400).send({
            message: "The name or health of the enemy can not be empty"
        });
        return;
    }
    const enemy = {
        name: req.body.name,
        description: req.body.description,
        health: req.body.health
    };
    Enemy.create(enemy)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Enemy"
            });
        });
};