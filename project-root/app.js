require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const sequelize = require("./config");

app.use(cors());
app.use(express.json());

const movieRoutes = require("./routes/movieRoutes");

const authRoutes = require("./routes/authRoutes");

app.use("/api/movies", movieRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

// Define server port
const PORT = process.env.PORT || 3000;

// Sync Sequelize models with database and then start server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database & tables synced with alterations");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync db:", err);
  });
