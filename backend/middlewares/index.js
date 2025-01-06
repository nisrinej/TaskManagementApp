import jwt from 'jsonwebtoken';
import User  from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['Authorization'];
        if (!token) return res.status(403).json({message: 'No token provided'});

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, {password: 0});
        if (!user) return res.status(404).json({message: 'No user found'});

        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}