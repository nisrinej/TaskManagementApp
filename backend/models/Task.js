import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const Task = mongoose.model('Task', TaskSchema);
export default Task;
