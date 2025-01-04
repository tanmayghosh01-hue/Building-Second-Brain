import mongoose, { model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://chiefhikebulzara:chiefisbulzara@cluster0.rd1qa.mongodb.net/second-brain"
);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
