const express = require("express");
const router = express.Router();
const plexController = require("../controller/plex.controller");

router.use(express.urlencoded({ extended: true }));

router.get("/get-media", plexController.getPlexAllLibrary);

module.exports = router;
