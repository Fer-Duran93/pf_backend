const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    direction: String,
    status: { type: String, default: "Generada" },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "CartModel",
      },
    ],
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserModel",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("OrderModel", orderSchema);
