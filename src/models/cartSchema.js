const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    direction: String,
    items: [],
    email: [
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

module.exports = mongoose.model("CartModel", cartSchema);
