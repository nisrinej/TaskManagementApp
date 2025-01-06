import express from 'express';
import {getTasks, getTask, postTask, putTask, deleteTask} from '../controllers/taskController.js';
import {verifyToken} from '../middlewares/index.js';
const Taskrouter = express.Router();

Taskrouter.route('/').get(verifyToken,getTasks);
Taskrouter.route('/').post(verifyToken,postTask);
Taskrouter.route('/:id').put(verifyToken,putTask);
Taskrouter.route('/:id').get(verifyToken,getTask);
Taskrouter.route('/:id').delete(verifyToken,deleteTask);

export default Taskrouter;

