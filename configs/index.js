// Environment
require("dotenv").config();

module.exports = {
  // server
  port: process.env.PORT || 3000,
  // plex
  plexUrl: process.env.PLEX_URL,
  endPointPlex: {
    getLibrary: "/library/sections/", // GET http://[IP address]:32400/library/sections/?X-Plex-Token=[PlexToken]
    scanAllLibrary: "/library/sections/all/refresh", // GET http://[IP address]:32400/library/sections/all/refresh?X-Plex-Token=[PlexToken]
    getAllMovies: "/library/sections/", // GET http://[IP address]:32400/library/sections/[Movies Library ID]/all?X-Plex-Token=[PlexToken]
    getAllTvShows: "/library/sections/", // GET http://[IP address]:32400/library/sections/[TV Shows Library ID]/all?X-Plex-Token=[PlexToken]&[Filter]
  },
  // real debrid
  realDebridApiToken: process.env.REAL_DEBRID_API_TOKEN,
  // axios
  axiosHeader: {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "X-Plex-Token": process.env.PLEX_API_TOKEN,
    },
  },
};
