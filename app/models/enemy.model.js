module.exports = (sequelize, Sequelize) => {
    const Enemy = sequelize.define("enemy", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        health: {
            type: Sequelize.INTEGER
        }
    });
    return Enemy;
}