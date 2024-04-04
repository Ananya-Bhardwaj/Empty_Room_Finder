import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  day: {
    type: String, 
    required: true 
  }, 
  time: {
    slot: {
      type: String
    }, 
    class: {
      type: String 
    }
  }
});

export default mongoose.model("Room", RoomSchema); 