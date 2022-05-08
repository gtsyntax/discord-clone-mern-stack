import express from "express"
import Joi from "joi"
import { SignUp } from "../controllers/signUpController.js"
import { SignIn } from "../controllers/signInController.js"
import loginRequired  from "../middlewares/loginRequired.js"
import validator from "express-joi-validation"
validator.createValidator({})

const router = express.Router()

const signUpSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string(),
    email: Joi.string().email()
})

const signInSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string(),
})

router.post("/sign-up", SignUp)

router.post("/sign-in", SignIn)

router.get("/test", loginRequired, (req, res) => {
    res.send("Viewed content")
})

export default router