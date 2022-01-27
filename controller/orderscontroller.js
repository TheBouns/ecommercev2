const { Order,Sequelize,Curse} = require("../models/index.js");
const { Op } = Sequelize;

const OrderController = {
    
    insert(req,res){
        Order.create({...req.body,UserId: req.user.id})
        .then(order=>{
            console.log(req.body.CursesId)
            order.addCurse(req.body.CurseId);
            res.send(order)
        })
        .catch(err=> console.error(err));
    },
    showAll(req,res){
        Order.findAll({include: [
            {model: Curse ,  through: {attributes: []}}, 
        ]}).then(order=> res.send(order))

    }
}


module.exports = OrderController;