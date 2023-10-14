const express = require("express");
const app = express();
const server = require("http").createServer(app);
const configs = require("./configs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.use("/plex", require("./route/plex.route"));

server.listen(configs.port, () => {
  console.log("Server listening on " + configs.port + " port..");
});
