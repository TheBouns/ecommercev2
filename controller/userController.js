const { User } = require("../models/index.js");
const user = require("../models/user.js");

const UserController = {
  create(req, res) {
    req.body.rol = "user";
    User.create({ ...req.body })
      .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user })
      )
      .catch(console.error);
  },
  showUsers(req, res) {
    User.findAll().then((users) => res.send(users));
  },
  userById(req, res) {
    User.findByPk(req.params.id).then((user) => res.send(user));
  },
  async updateUser(req, res) {
    try {
      let user = await User.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send("Usuario Actualizado");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = UserController;
