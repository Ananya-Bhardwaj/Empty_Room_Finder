import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    slot: {
      type: String,
    },
    class: {
      type: Object.Schema.Types.ObjectId,
      required: true,
      ref: "Class",
    },
  },
});

export default mongoose.model("Room", RoomSchema);
