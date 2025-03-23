
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";
    //@ts-ignore
export const userMiddleware = (req , res , next)=>{
 const header = req.headers["authorization"];
 const decoded = jwt.verify(header as string, JWT_PASSWORD)

 if(decoded){
    //@ts-ignore
    req.userId = decoded.id;
    next();
 }
 else{
    res.status(400).json({
        message: "Incorrect Credentals"
    })
 }
}