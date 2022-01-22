const { User, Curses } = require("../models/index.js");

const cursesController = {
  create(req, res) {
    Curses.create({ ...req.body }).then(() => res.send({ message: "created" }));
  },
};

module.exports = cursesController;
