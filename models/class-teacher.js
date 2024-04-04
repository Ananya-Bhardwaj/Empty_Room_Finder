import mongoose from "mongoose";

const ClassTeacherSchema = mongoose.Schema({
  class: {
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
});

export default mongoose.model("ClassTeacherSchema", ClassSchema);
