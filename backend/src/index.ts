import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {UserModel} from "./db";

const app = express();
app.use(express.json());

//@ts-ignore
app.post("/user/signup", async (req, res)=>{
    const {username, password} = req.body;

    const alreadyUser = await UserModel.findOne({username})

        if(alreadyUser){
            return res.status(400).send("you are already signed up")
        }

    const hashedpassword =await bcrypt.hash(password, 10)

    await UserModel.create({
        username: username,
        password: hashedpassword
    })
    res.status(200).json({message: "you are signed successfully"})
})

app.post("/user/signup", (req , res)=>{
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json({
            message: "Both fields are Required"
        })
    }

   


})