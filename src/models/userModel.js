import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide a email"],
    unique: true,
  },
 
  password: {
    type: String,
    required: [true, "Please Provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
