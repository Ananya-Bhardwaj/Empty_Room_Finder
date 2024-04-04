import mongoose from "mongoose";

const ClassSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  one: {
    type: String,
  },
  two: {
    type: String,
  },
  three: {
    type: String,
  },
  four: {
    type: String,
  },
  five: {
    type: String,
  },
  six: {
    type: String,
  },
  seven: {
    type: String,
  },
  eight: {
    type: String,
  },
});

export default mongoose.model("Class", ClassSchema);
