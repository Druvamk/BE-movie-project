const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "be_movie_db",
  "be_movie_user",
  "MovieApp@2025",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
