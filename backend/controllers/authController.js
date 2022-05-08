import User from "../models/user.js"
import bycrypt from "bcryptjs"

export const SignUp = async (req, res) => {
    try {
        const {username, email, password} = req.body

        // checking for existing user
        const registeredUser = await User.exists({ email: email.toLowerCase() })
        if (registeredUser) {
            return res.status(409).send("User Already Exists")
        }

        // encrypt user password
        const hashedPassword = await bycrypt.hash(password, 10)

        // create and save user to database
        const user = User.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        // JWT token to be implementated later
        const token = "jwt-token"

        res.send("User created successfully!")

    } catch(err) {
        return res.status(500).send("An Error occured.")
    }
}


export const SignIn = async (req, res) => {
    console.log(req.body)
    res.send("Sign in")
}