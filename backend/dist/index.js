"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//@ts-ignore
app.post("/user/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const alreadyUser = yield db_1.UserModel.findOne({ username });
    if (alreadyUser) {
        return res.status(411).send("you are already signed up");
    }
    const hashedpassword = yield bcrypt_1.default.hash(password, 10);
    yield db_1.UserModel.create({
        username: username,
        password: hashedpassword
    });
    res.status(200).json({ message: "you are signed successfully" });
}));
//@ts-ignore
app.post("/user/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const existingUser = yield db_1.UserModel.findOne({
        username
    });
    if (!existingUser) {
        return res.status(400).json({ message: "user not found" });
    }
    const passwordMatch = yield bcrypt_1.default.compare(password, existingUser.password);
    if (passwordMatch) {
        const token = yield jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, config_1.JWT_PASSWORD);
        res.json({ token });
    }
    else {
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }
}));
//@ts-ignore
app.post("/user/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link, type } = req.body;
    yield db_1.contentModel.create({
        //@ts-ignore
        title, link, type, userId: req.userId, tags: []
    });
    return res.json({
        message: "content added"
    });
}));
//@ts-ignore
app.get("/user/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const content = yield db_1.contentModel.find({
        userId: userId
    }).populate("userId", "username");
    return res.json({ content });
}));
app.listen(3000);
