const express=require("express");
const { connect } = require("./db/db");
const { userRouter } = require("./route/userRoute");
const cors=require('cors')
const app=express();
const port =process.env.PORT || 4500;
app.use(cors())
app.use(express.json());
app.use("/user",userRouter)
app.listen(port,async(req,res)=>{
    try {
        await connect;
        console.log(`db is connected to this port ${port}`)
    } catch (error) {
        console.log(`db is not connected now`)
    }
})