const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body.character;

        if (!id || !name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json({ error: "Faltan datos" });
        }

        const [ charFav, created ] = await Favorite.findOrCreate({
            where: { id },
            defaults: { 
                name, 
                origin, 
                status, 
                image, 
                species, 
                gender, 
            },
        });

        if (!created) {
            return res.status(409).json({ error: "El personaje ya se encuentra en favoritos" })
        }

        const favorites = await Favorite.findAll();

        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = postFav;