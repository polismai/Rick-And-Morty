const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
       
        if (!email || !password) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const [user, created] = await User.findOrCreate({ 
            where: { email }, 
            defaults: { password } 
        });

        if(!created) {
            return res.status(409).json({ error: "El email ya está registrado"})
        }

        return res.status(200).json({ created: "success", user });
    } catch (error) {
        return res.status(500).json({ error: error.message }); 
    }
}

module.exports = postUser;