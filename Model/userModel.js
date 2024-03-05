import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  pwd: {
    type: String,
  },
  emailID: String,
  _v: {
    type: Number,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
