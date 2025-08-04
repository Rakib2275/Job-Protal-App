import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Register
export const register = async (req, res) => {
    try {
        const { fullname, email, phonenumber, password, role } = req.body;
        // console.log(fullname);
        if (!fullname || !email || !phonenumber || !password || !role) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phonenumber,
            password: hashedPassword,
            role
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// Login
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch || role !== user.role) {
            return res.status(400).json({ message: "Invalid credentials or role", success: false });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phonenumber: user.phonenumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

// Logout
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully.",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

// Update Profile
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phonenumber, bio, skills } = req.body;
        const file = req.file;

        // if (!fullname || !email || !phonenumber || !bio || !skills) {
        //     return res.status(400).json({ message: "All fields are required", success: false });
        // }
        let skillsArray;
        if(skills){
            const skillsArray = skills.split(",").map((skill) => skill.trim());
        }

        const userId = req.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        const emailUser = await User.findOne({ email });
        if (emailUser && emailUser._id.toString() !== userId) {
            return res.status(400).json({ message: "Email already in use", success: false });
        }
        //updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phonenumber) user.phonenumber = phonenumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
        
        if (file) {
            const uploaded = await cloudinary.uploader.upload(file.path, { folder: "profiles" });
            user.profile.avatar = uploaded.secure_url;
            fs.unlinkSync(file.path);
        }

        await user.save();

        return res.status(200).json({
            message: "Profile updated",
            user,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", success: false });
    }
};
