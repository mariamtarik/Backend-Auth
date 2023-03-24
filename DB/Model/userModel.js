const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: String,
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,+process.env.SALT_ROUD);
    next()
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
