const { User, Curse, Sequelize,Categories,Order} = require("../models/index.js");
const { Op } = Sequelize;

const categoriesController ={
    showAllCategories(req,res){
        Categories.findAll()
        .then(categorie=> res.send(categorie))
        .catch(err => console.log(err))
    },
    create(req,res){
        Categories.create({...req.body})
        .then(()=> res.send("Categorie has been created"))
        .catch(err=> console.log(err))
    },
    async update(req, res) {
        try {
          await Categories.update(
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
          await Categories.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.send("Categorie has been deleted");
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Something went wrong" });
        }
      },
      showByName(req, res) {
        Categories.findOne({
          where: {
            name: {
              [Op.like]: `${req.params.title}%`,
            },
          },
        })
          .then((category) => {
            if (!category) {
              return res
                .status(400)
                .send("What are you trying to learn??");
            }
            res.send(category);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      showById(req, res) {
        Categories.findOne({
          where: {
            id: req.params.id,
          },
        })
          .then((category) => {
            if (!category) {
              return res
                .status(400)
                .send("Sorry we dont have what you are looking for");
            }
            res.send(
             category.name 
            );
          })
          .catch((err) => {
            console.log(err);
          });
      },
      categoriesCurses(req,res){
          Categories.findAll({
              include:[{model:Curse, as :'curse'}]
          }).then(category => res.send(category))

      }
}

module.exports = categoriesController;