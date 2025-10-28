const Movie = require("../models/movie");

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all movies with pagination
exports.getMovies = async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Movie.findAndCountAll({ limit, offset });
    res.json({
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
      movies: rows,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a movie by id
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a movie
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    await movie.update(req.body);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    await movie.destroy();
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
