const express = require("express")
const { connection } = require("./Config/db")
const { addProductsController, getProductsController } = require("./Controllers/products.controller")
const cors = require("cors")
const { bookmarkController, getBookmarks } = require("./Controllers/bookmark.controller")
require("dotenv").config()
const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello from the backend")
})

app.post("/addproducts" , addProductsController)

app.get("/products" , getProductsController)

app.post("/addtobookmarks" , bookmarkController)

app.get("/bookmarks",getBookmarks)

app.listen(PORT, async()=>{
    try{
        await connection
        console.log("connection to db successful")
    }
    catch(err){
        console.log("Error in connection to db")
        console.log(err)
    }
    console.log(`listening at port ${PORT}`)
})