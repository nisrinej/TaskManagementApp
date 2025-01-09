import express from 'express';
import { login, register, profile } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/login', login);
userRoutes.post('/register', register);
userRoutes.get('/profile', profile);

export default userRoutes;