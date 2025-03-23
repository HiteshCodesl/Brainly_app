import express, {Request, Response} from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {contentModel, UserModel} from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
const app = express();
app.use(express.json());

//@ts-ignore
app.post("/user/signup", async (req: Request , res:Response) =>{
    const {username, password} = req.body;

    const alreadyUser = await UserModel.findOne({username})

        if(alreadyUser){
            return res.status(411).send("you are already signed up")
        }

    const hashedpassword =await bcrypt.hash(password, 10)

    await UserModel.create({
        username: username,
        password: hashedpassword
    })
    res.status(200).json({message: "you are signed successfully"})
})

//@ts-ignore
app.post("/user/signin", async (req:Request , res: Response)=>{
    const {username, password} = req.body;

   const existingUser = await UserModel.findOne({
    username
   }) 

   if(!existingUser){
   return  res.status(400).json({message: "user not found"})
   }

   const passwordMatch = await bcrypt.compare(password, existingUser.password)
   
   if(passwordMatch){
    const token = await jwt.sign({
       id: existingUser._id
    }, JWT_PASSWORD)
   
   res.json({ token})
   
}else{
   return res.status(403).json({
        message: "Incorrect credentials"
    })
}
})
//@ts-ignore
app.post("/user/content", userMiddleware, async(req , res)=>{
    const {title, link, type}= req.body;
    await contentModel.create({
        //@ts-ignore
        title, link, type, userId: req.userId, tags: []
    })
    return res.json({
        message: "content added"
    })
})

//@ts-ignore
app.get("/user/content",userMiddleware, async(req, res)=>{
    //@ts-ignore
   const userId = req.userId
   const content = await contentModel.find({
    userId: userId
   }).populate("userId","username")
  return res.json({content})
})

//@ts-ignore
app.delete("/user/delete", userMiddleware, async(req , res)=>{
    const contentId = req.body.contentId;
    await contentModel.deleteOne({
        contentId,
        //@ts-ignore
         userId: req.userId
    })
    return res.json(200).json({
        message: "content deleted"
    })
})

app.post("/user/share", async(req, res)=>{
    
})

app.get("/user/shareLink", (req, res) => 
{

})



app.listen(3000)