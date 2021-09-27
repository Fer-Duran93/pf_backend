const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: String,
    username: String,
    phone: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("UserModel", UserSchema);
