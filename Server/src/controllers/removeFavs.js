// solo para limpiar la tabla de favoritos cuando programo

const { Favorite } = require("../DB_connection");

const removeFavs = async (req, res) => {
    await Favorite.destroy({
        where: {}
    });
    return res.status(200).json({ message: "ok" });
}

module.exports = removeFavs;