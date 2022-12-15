const { default: mongoose } = require("mongoose");

const bookmarkSchema = mongoose.Schema(
  {
    title: String,
    quantity: Number,
    priority: Number,
    description: String,
  },
  { timestamps: true }
);
const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = {Bookmark}
