const Genre = require("./model");

const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({ genre: req.body.genre });

        res.status(201).json({ genre: genre, message: "succefully added genre" })
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
};

const getGenres = async (req, res) => {
    try {
        const getGenre = await Genre.findAll({});

        res.status(201).json({ getGenre: getGenre, message: "Genres found" })
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: error.message })
    }
}

module.exports = { addGenre, getGenres };