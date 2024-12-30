import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

dotenv.config();

connectDB();

const app = express()

app.use(express.json())
app.use(morgan('dev'))

//write routes before apis
app.use('/api/v1/auth',authRoutes)

//apis
app.get('/', (req, res) => {
    res.send({
        message:'Welcome to ecommerce app'
    })
})


const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})