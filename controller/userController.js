const { User,Curse } = require("../models/index.js");
const bcrypt = require("bcryptjs");


const UserController = {
  login(req,res){
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            return res.status(400).send({message:"USer or Password Wrong"})
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch){
            return res.status(400).send({message:"User or Password Wrong"})
        }
        res.send(user)
    })
},

  create(req, res) {
    req.body.rol = "user";
    const hash = bcrypt.hashSync(req.body.password,10)
    User.create({ ...req.body, password:hash })
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
