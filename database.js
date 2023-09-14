const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("posts", "root", "Root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
