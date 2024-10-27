import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
const { hash } = bcrypt;

// register
export const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // check if email already used
        const targetUser = await User.findOne({ email });
        if (targetUser) return res.json({
            success: false,
            message: "User already exists!",
            description: "Please log in or try again with a different email"
        });

        // hash password
        const hashPassword = await bcrypt.hash(password, 11);
        const user = new User({
            userName, email, password: hashPassword
        });

        await user.save();
        res.status(200).json({
            success: true,
            message: "Registration successful!",
            description: "You can now log in to your account"
        });

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
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const targetUser = await User.findOne({ email });
        if (!targetUser) return res.json({
            success: false,
            message: "User does not exist!",
            description: "Please create an account to log in"
        });

        // check password
        const checkPassword = await bcrypt.compare(password, targetUser.password)
        if (!checkPassword) return res.json({
            success: false,
            message: "Incorrect password",
            description: "Please try again"
        });

        // create a token
        const token = jwt.sign({
            id: targetUser.id,
            role: targetUser.role,
            email: targetUser.email
        }, 'CLIENT_SECRET_KEY',
            { expiresIn: '60m' }
        )

        res.cookie('token', token, { httpOnly: true, secure: false }).json({
            success: true,
            message: "Logged in successfully",
            user: {
                email: targetUser.email,
                role: targetUser.role,
                id: targetUser.id
            }
        })

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


