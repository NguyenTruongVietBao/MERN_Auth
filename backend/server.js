const express = require('express');
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workouts')
const userRouter = require('./routes/user')
const cors = require("cors")

require('dotenv').config();

// express app
const app = express();

// cors
app.use(cors());

// middleware 
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.use('/api/workouts',workoutRouter)
app.use('/api/user', userRouter)

// database connect
mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Database connect successfully');
    })
    .catch(()=>{
        console.log('Database connect failed');
    })

// listen for request
app.listen(process.env.PORT, ()=>{
    console.log('Server listening on port ', process.env.PORT)
})
