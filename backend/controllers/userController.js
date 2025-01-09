import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dontenv from "dotenv";

dontenv.config();

export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({msg: 'All fields are required'});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({name, email, password: hashedPassword});
        res.status(201).json({msg: 'User registered successfully'});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({msg: 'All fields are required'});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'User does not exist'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: 'Invalid credentials'});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email}});
    }
    catch(err){
        res.status(500).json({msg: 'Server error'});
    }
}

export const profile = async(req, res) =>{
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json({ user, status: true, msg: "Profile found successfully.." });
      }
      catch (err) {
        console.error(err);
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
      }
}

