const { Favorite } = require("../DB_connection");

const deleteFav = async(req,res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const favorite = await Favorite.findByPk(parseInt(id));
        await favorite.destroy();
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFav;

