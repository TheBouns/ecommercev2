const { User,Curse,Token,Sequelize} = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {jwt_secret}  = require("../config/config.json")['development']
const {Op} = Sequelize;



const UserController = {
  login(req,res){
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
            return res.status(400).send({message:"User or Password Wrong"})
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if(!isMatch){
            return res.status(400).send({message:"User or Password Wrong"})
        }
        token = jwt.sign({id:user.id}, jwt_secret)
        Token.create({token,UserId:user.id});
        res.status(200).send({message: `Welcome ${user.name}`, token})
    })
},

  create(req, res) {
    console.log(req.body)
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
},
async logout(req, res) {
  try {
      await Token.destroy({
          where: {
              [Op.and]: [
                  { UserId: req.user.id },
                  { token: req.headers.authorization }
              ]
          }
      });
      res.send({ message: 'See you later alligator' })
  } catch (error) {
      console.log(error)
      res.status(500).send({ message: 'Something went wrong -.-' })
  }
}


};

module.exports = UserController;
