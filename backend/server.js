import express from 'express';
import  connectDB from './config/db.js'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

//Initialize Express App
const app = express();

//Middleware
app.use(express.json());

//Connect To MongoDB

connectDB();

//sample routes
app.use('/api/auth',authRoutes);
app.get('/',(req,res)=>{
  res.send('Api is running');
})



//Define the port
const PORT = process.env.PORT || 5000;

//Start Server
app.listen(PORT,()=>

console.log(`Server is running on port ${PORT}`)
)
