module.exports = (sequelize, Sequelize) => {
    const Immunities = sequelize.define("immunities", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Immunities;
};