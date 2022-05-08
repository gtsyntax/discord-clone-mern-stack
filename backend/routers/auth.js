import express from "express"
import Joi from "joi"
import { SignIn, SignUp } from "../controllers/authController.js"
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

export default router