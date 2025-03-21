import mongoose, {Schema, model} from "mongoose"
mongoose.connect("mongodb+srv://hiteshnavare:crGLGRwEizgVSncx@cluster0.j1065.mongodb.net/Brainly")

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

export const UserModel = model("User",UserSchema )

const tagSchema = new Schema({
    title: {type: String, required: true,
        unique: true
    },
})
  
