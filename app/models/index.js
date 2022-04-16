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
db.enemy.hasMany(db.resistances, { as: "resistances" });
db.resistances.belongsTo(db.enemy, {
  foreignKey: "enemyId",
  as: "enemy"
});
module.exports = db;