import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRoutes from './routes/todoRoutes.js'

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())

//Connect with MongoDB
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('-----Database Connected------')
    } catch (error) {
        console.log('Error in Connecting DB')
    }
}

connectDB()

app.use('/todo' , todoRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT , ()=>{
    console.log(`Server is Running At Port: ${PORT}` )
})

