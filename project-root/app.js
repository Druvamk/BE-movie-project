const express = require("express");
const app = express();
const sequelize = require("./config"); // Import Sequelize connection
require("dotenv").config();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import movie routes
const movieRoutes = require("./routes/movieRoutes");

// Import auth routes
const authRoutes = require("./routes/authRoutes");

// Use movie routes under /api/movies path
app.use("/api/movies", movieRoutes);

// Use auth routes under /api/auth path
app.use("/api/auth", authRoutes);

// Basic test route for API health check
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
