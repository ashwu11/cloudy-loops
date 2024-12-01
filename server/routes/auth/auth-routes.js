import express from 'express'
import { registerUser, loginUser, logoutUser, authMiddleware } from '../../controllers/auth/auth-controller.js';

const authRouter = express.Router();
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
authRouter.get("/check-auth", authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "User is authenticated!",
        user
    });
});

export default authRouter;