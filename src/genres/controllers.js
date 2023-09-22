const Genre = require("./model");

const addGenre = async (req, res) => {
    try {
        const genre = await Genre.create({
            genre: req.body.genre,
        });

        res.status(201).json({ genre: genre, message: "succefully added genre"})
    } catch (error) {
        res.status(500).json({ error: error, errorMessage: errorMessage })
    }
};

module.exports = {
    addGenre
}