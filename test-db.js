const sequelize = require("../BE-Movie-project/project-root/config.js");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Unable to connect:", err);
    process.exit(1);
  });
