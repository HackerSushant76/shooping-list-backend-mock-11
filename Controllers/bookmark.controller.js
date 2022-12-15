const { Bookmark } = require("../Models/bookmark.model")

const bookmarkController =async(req,res)=>{
    const {title,quantity, priority,description} = req.body
    const bookmarkedItem = new Bookmark({title,quantity, priority,description})
    await bookmarkedItem.save()
    res.send("Bookmarked Successfully")
}

const getBookmarks = async(req,res) => {
    const bookmarks = await Bookmark.find()
    res.send(bookmarks)
}
module.exports = {bookmarkController,getBookmarks}