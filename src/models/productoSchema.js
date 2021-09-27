const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    stock: { type: Number },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ProductoModel", productoSchema);
