const { User,Curse } = require("../models/index.js");


const UserController = {
  create(req, res) {
    req.body.rol = "user";
    User.create({ ...req.body })
      .then((user) =>
        res.status(201).send({ message: "User created", user })
      )
      .catch(console.error);
  },
  showUsers(req, res) {
    User.findAll().then((users) => res.send(users));
  },
  userById(req, res) {
    User.findByPk(req.params.id).then((user) => res.send(user));
  },
  async updateUser(req, res,) {
    
    try {
      let user = await User.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send(`User ${user} has been updated`);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        await Curse.destroy({
            where: {
                UserId: req.params.id
            }
        })
        res.send(
            'User deleted'
        )
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Something went wrong"})
    }
}
};

module.exports = UserController;
