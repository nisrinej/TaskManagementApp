import express from 'express';
import {getTasks, getTask, postTask, putTask, deleteTask} from '../controllers/taskController.js';
import {verifyAccessToken} from '../middlewares/index.js';
const Taskrouter = express.Router();

Taskrouter.route('/').get(verifyAccessToken,getTasks);
Taskrouter.route('/').post(verifyAccessToken,postTask);
Taskrouter.route('/:id').put(verifyAccessToken,putTask);
Taskrouter.route('/:id').get(verifyAccessToken,getTask);
Taskrouter.route('/:id').delete(verifyAccessToken,deleteTask);

export default Taskrouter;

