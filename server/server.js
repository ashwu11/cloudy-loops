import express, { json } from 'express'
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './routes/auth/auth-routes.js'

// connect to database
connect('mongodb+srv://cloudyloops:cloudy._.loops11@cluster0.df06p.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));

// create app
const app = express();
const PORT = process.env.PORT || 5001;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(json());
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));