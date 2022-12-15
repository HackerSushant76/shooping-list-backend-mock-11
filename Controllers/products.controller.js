const { ListItem } = require("../Models/List.model")

const addProductsController = async(req,res) => {
    const {title,quantity,priority,description} =  req.body
    const item = new ListItem({title,quantity,priority,description})
    await item.save()
    res.send("successfully added to db")
}

const getProductsController = async (req,res)=>{
    const list = await ListItem.find()
    res.send(list)
}

const deleteProd = async(req,res) => {
    const {id} = req.params
    await ListItem.deleteOne({_id: id})
    res.send("deletion successful")
}

module.exports = {addProductsController,getProductsController,deleteProd}