const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("user", userSchema);
