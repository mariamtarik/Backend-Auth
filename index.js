const express = require('express');
const connectDB = require('./DB/connect');
const app = express()
var cors = require('cors')
app.use(express.json());
app.use(cors())
require("dotenv").config()
const port = process.env.PORT;
connectDB();
//Auth Router
const authRouter=require("./Routes/AuthRouter")
app.use("/api/auth/",authRouter)
app.use("/",(req,res)=>{res.send("hello")})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))