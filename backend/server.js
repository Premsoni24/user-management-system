require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
 await mongoose.connect(process.env.MONGO_URI);
}
app.get('/',(req,res)=>{
    res.send('Hello World');
});
const PORT = process.env.PORT || 3000; 
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})

