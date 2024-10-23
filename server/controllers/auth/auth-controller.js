import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

// register
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // hash password
        const hashPassword = await hash(password, 11);
        const user = new User({
            userName, email, password: hashPassword
        })

        await user.save();
        res.status(200).json({
            success: true,
            message: "Registration success!"
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "An error occured :(",
            error: e.message
        });
    }
};


// login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "An error occured :("
        });
    }
};


// logout



// middleware

export default registerUser;