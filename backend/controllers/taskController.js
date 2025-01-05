import Task from '../models/Task.js';


export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({user: req.user._id});
        res.status(200).json({tasks, status: true, msg: 'Tasks fetched successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

export const getTask = async(req, res) =>{
    try{
        if(!req.params.id){
            return res.status(400).json({msg: 'Task id is required'});
        }
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }
        res.status(200).json({task, status: true, msg: 'Task found successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

export const postTask = async(req, res) =>{
    try{
        const {description} = req.body;
        if(!description){
            return res.status(400).json({msg: 'Description is required'});
        }
        const task = new Task({description, completed: false, user: req.user._id});
        await task.save();
        res.status(201).json({task, status: true, msg: 'Task created successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}
    
export const putTask = async(req, res) =>{
    try{
        const {description, completed} = req.body;
            if(!req.params.id){
                return res.status(400).json({msg: 'Task id is required'});
            }
            let task = await Task.findById(req.params.id);
            if(!task){
                return res.status(404).json({msg: 'Task not found'});
            }
        task = await Task.findByIdAndUpdate(req.params._id, {description, completed}, {new: true});
        res.status(200).json({task, status: true, msg: 'Task updated successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

export const deleteTask = async(req, res) =>{
    try{
        if(!req.params.id){
            return res.status(400).json({msg: 'Task id is required'});
        }
        let  task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({status: true, msg: 'Task deleted successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

