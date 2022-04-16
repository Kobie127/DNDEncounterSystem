const dbConfig = require("../config/enemydb.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.enemy = require("./enemy.model.js")(sequelize, Sequelize);
db.resistances = require("./resistances.model.js")(sequelize, Sequelize);
db.immunities = require("./immunities.model")(sequelize, Sequelize);
db.vulnerabilties = require("./vulnerabilities.model")(sequelize, Sequelize);
db.enemy.hasMany(db.resistances, { as: "resistances" });
db.enemy.hasMany(db.immunities, { as: "immunities" });
db.enemy.hasMany(db.vulnerabilties, { as: "vulnerabilities" });
db.resistances.belongsTo(db.enemy, {
  foreignKey: "enemyId",
  as: "enemy"
});
db.immunities.belongsTo(db.enemy, {
  foreignKey: "enemyId",
  as: "enemy"
});
db.vulnerabilties.belongsTo(db.enemy, {
  foreignKey: "enemyId",
  as: "enemy"
});
module.exports = db;