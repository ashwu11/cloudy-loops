const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// register
const register = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        // hash password
        const hashPassword = await bcrypt.hash(password, 11);
        const user = new User({
            userName, email, password: hashPassword
        })

        await user.save((error) => {
            if(error){
                console.log(error);
                return;
            }
        });

        res.status(200).json({
            success: true,
            message: "Registration success!"
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "An error occured :("
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



// in between