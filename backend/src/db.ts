import mongoose, {Schema, model, mongo} from "mongoose"
mongoose.connect("mongodb+srv://hiteshnavare:crGLGRwEizgVSncx@cluster0.j1065.mongodb.net/Brainly")

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})
export const UserModel = model("User",UserSchema )


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags:[{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true}
})
export const contentModel = model("content", ContentSchema)


const tagSchema = new Schema({
    title: {type: String, required: true,
        unique: true
    },
})
  
