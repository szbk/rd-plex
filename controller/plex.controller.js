const plexService = require("../service/plex.service");
const configs = require("../configs");

const getPlexAllLibrary = async (req, res, next) => {
  try {

    const url = encodeURI(configs.plexUrl + configs.endPointPlex.getLibrary);
    const result = await plexService.getAllLibrary(url);
    res.status(200).json({ error: false, message: "Success", result });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: true, status: 404, message: error.message });
    next();
  }
};

module.exports = {
  getPlexAllLibrary,
};
