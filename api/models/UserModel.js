const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email: {  
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
