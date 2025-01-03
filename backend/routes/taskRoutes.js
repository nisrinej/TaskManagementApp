import express, {router} from 'express';
import {getTasks, postTask, putTask, deleteTask} from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks);
router.route('/').post(postTask);
router.route('/:id').put(putTask);
router.route('/:id').get(getTask);
router.route('/:id').delete(deleteTask);

export default router;

