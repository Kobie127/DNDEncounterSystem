module.exports = (sequelize, Sequelize) => {
    const Vulnerabilties  = sequelize.define("vulnerabilties", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Vulnerabilties;
}