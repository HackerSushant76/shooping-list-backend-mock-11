const { default: mongoose } = require("mongoose");

const listSchema = mongoose.Schema(
  {
    title: String,
    quantity: Number,
    priority: Number,
    description: String,
  },
  { timestamps: true }
);
const ListItem = mongoose.model("shoppingList", listSchema);

module.exports = { ListItem };
