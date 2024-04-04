import mongoose from "mongoose"

const ClassSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    day: 
    {
        type: String, 
        required: true  
    }, 
    room: 
    {
        type: Object.Schema.Types.ObjectId, 
        required: true, 
        ref: "Room"
    }, 
    1: {
        type: String
    }, 
    2: {
        type: String
    }, 
    3: {
        type: String
    }, 
    4: {
        type: String
    }, 
    5: {
        type: String
    }, 
    6: {
        type: String
    }, 
    7: {
        type: String
    }, 
    8: {
        type: String
    }
})

export default mongoose.model("Class", ClassSchema);
