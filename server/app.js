const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config();
const dbconnect = require('./config/connectToDB')
const authRoutes = require("./routes/authRouters")
const userRoutes = require("./routes/userRoutes")
dbconnect(); 

const app = express()

port = process.env.PORT;

//middleware  
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(port, ()=>{
    console.log(`server is up and running on ${port}`)
})
