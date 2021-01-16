const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not,
  $and:Op.and,
  $or:Op.or
}
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: operatorsAliases,

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


db.tblUser = require("./tblUsers.js")(sequelize, Sequelize);

module.exports = db;