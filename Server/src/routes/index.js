const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
const removeFavs = require("../controllers/removeFavs");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.delete("/fav/:id", deleteFav);
router.post("/fav", postFav);
router.post("/removeFavs", removeFavs);

module.exports = router;