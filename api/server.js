const express = require("express");
const fruitsRouter = require('./fruits/fruits-router')

const server = express();
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.use(express.json());
server.use('/api/fruits', fruitsRouter)



module.exports = server;
