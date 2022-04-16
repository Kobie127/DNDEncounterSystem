module.exports = (sequelize, Sequelize) => {
    const Resistances = sequelize.define("resistances", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Resistances;
};