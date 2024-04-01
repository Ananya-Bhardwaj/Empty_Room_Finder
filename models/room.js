import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  day: [
    {
      name: {
        type: String,
        required: true,
      },
      slots: [
        {
          time: {
            type: String,
            required: true,
          },
          batch: {
            type: String
          },
          subject: {
            type: String
          },
          teacher: {
            type: String
          },
          isEmpty: {
            type: Boolean, 
            required: true, 
            default: true 
          }
        },
      ],
    },
  ],
});

export default mongoose.model("Room", RoomSchema); 