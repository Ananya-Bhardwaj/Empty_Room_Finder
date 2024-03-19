import mongoose from "mongoose"

const classSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    day: [
    {
        name: {
            type: String, 
        }, 
        slots: [
            {
                time: {
                    type: String
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
                room: {
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'room'
                }
            }
        ]
    }]
}
)

export default mongoose.model("Class", classSchema);
