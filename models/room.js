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
            type: String,
            required: true,
          },
          subject: {
            type: String,
            required: true,
          },
          teacher: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

export default mongoose.model("Room", RoomSchema); 