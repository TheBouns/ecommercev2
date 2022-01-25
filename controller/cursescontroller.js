const { User, Curse, Sequelize,Categories,Order} = require("../models/index.js");
const { Op } = Sequelize;

const cursesController = {
  create(req, res) {
    Curse.create({ ...req.body }).then(() =>
      res.send({ message: "Curse Created" })
    );
  },
  showCurses(req, res) {
    Curse.findAll({
      include:[{model:Order, as :'orders' ,foreignKey : 'OrderId'},{model:Categories, as:"categories"}]
    })
      .then((curse) => res.send(curse))
      .catch(console.error);
  },
  showById(req, res) {
    Curse.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((curse) => {
        if (!curse) {
          return res
            .status(400)
            .send("We dont have it this curse at the moment");
        }
        res.send(
          `Title: ${curse.title} Price: ${curse.price} Duration: ${curse.duration}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  showByNameAll(req, res) {
    console.log(req.params.title);
    Curse.findAll({
      where: {
        title: {
          [Op.like]: `${req.params.title}%`,
        },
      },
    })
      .then((curse) => {
        if (!curse) {
          return res
            .status(400)
            .send("We dont have it this curse at the moment");
        }
        res.send(curse);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  showByName(req, res) {
    Curse.findOne({
      where: {
        title: {
          [Op.like]: `${req.params.title}%`,
        },
      },
    })
      .then((curse) => {
        if (!curse) {
          return res
            .status(400)
            .send("We dont have it this curse at the moment");
        }
        res.send(curse);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  showByPrice(req, res) {
    let number = Number(req.params.price);
    Curse.findAll({
      where: {
        price: {
          [Op.like]: `${number}`,
        },
      },
    })
      .then((curse) => {
        if (!curse) {
          return res
            .status(400)
            .send("We dont have it this curse at the moment");
        }
        res.send(curse);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateCurse(req, res) {
    try {
      let curse = await Curse.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send(`Curse has been updated`);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
      await Curse.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send("Curse has been deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong" });
    }
  },
  showByDesc(req, res) {
    Curse.findAll({
      order: [['price', 'DESC']]
    }).then((curse) => res.send(curse));
  },
};

module.exports = cursesController;
