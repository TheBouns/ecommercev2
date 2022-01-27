const { User,Curse,Token,Sequelize,Order} = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");
const {jwt_secret}  = require("../config/config.json")['development'];
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

  async create(req, res) {
    try {
      const hash = bcrypt.hashSync(req.body.password,10)
      const user = await User.create({ 
        ...req.body, 
        password:hash, 
        rol:"user",
        confirmed:"false"});
      const url = 'http://localhost:4000/users/confirm'+req.body.email;
      await transporter.sendMail({
        to : req.body.email,
        subject:"Leon Account",
        html:`<h3>Click to confirm your account</h3><a href="${url}">click here!</a>`
      })
      res.send("GRACIAS JOAQUIN")
    } catch (error) {
      console.log(error)
      
    }
    
    
      
  },
  showUsers(req, res) {
    User.findAll({
      include: [{model : Order , include:[{model: Curse}]}]
    })
    .then((users) => res.send(users))
    .catch(err=> console.err(err))
  },
  userById(req, res) {
    User.findByPk(req.params.id)
    .then((user) => res.send(user))
    .catch(err=> console.error(err))
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
},
async confirm(req,res){
  try {
    const user = await User.update({confirmed:true},{
      where:{
        email: req.params.email
      }
    })
    res.status(201).send( "Confirmation was confirmed" );
  } catch (error) {
    console.error(error)
  }
},



};

module.exports = UserController;
