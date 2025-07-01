import express from 'express'
import studentRoutes from './Routes/studentRoute.js';
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(cors())

app.use('/api/student',studentRoutes);


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})