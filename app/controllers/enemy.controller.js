const db = require("../models");
const Enemy = db.enemy;
const Resistances = db.resistances;
const Immunities = db.immunities;
const Vulnerabilties = db.vulnerabilties;
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

exports.createResistance = (req, res) => {
    const resistance = {
        name: req.body.name,
        enemyId: req.params.enemyId
    };
    Resistances.create(resistance)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Resistance"
            });
        });
};

exports.createImmunities = (req, res) => {
    const immunity = {
        name: req.body.name,
        enemyId: req.params.enemyId
    };
    Immunities.create(immunity)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the immunity"
            });
        });
};

exports.createVulnerability = (req, res) => {
    const vulnerability = {
        name: req.body.name,
        enemyId: req.params.enemyId
    }
    Vulnerabilties.create(vulnerability)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err || "Some error ocurred while creating the vulnerability"
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var conditions = name ? {name: { [Op.like]: `${name}`}} : null;
    Enemy.findAll({
        include: conditions,
        include: ['resistances', 'immunities', 'vulnerabilities']
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving the enemies"
            });
        });
};

exports.findOne = (req, res) => {
    const name = req.query.name;
    var conditions = name ? {name: { [Op.like]: `${name}`}} : null;
    Enemy.findOne({where: conditions})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find the enemy with name = ${name}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Some error ocurred while retrieving tutorials."
            });
        });
};