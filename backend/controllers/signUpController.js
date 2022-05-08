import User from "../models/user.js"
import bycrypt from "bcryptjs"

export const SignUp = async (req, res) => {
    try {
        const { username, email, password}  = req.body

        // checking for existing user
        const registeredUser = await User.exists({ email: email.toLowerCase() })
        if (registeredUser) {
            return res.status(409).send("User Already Exists")
        }

        // encrypt user password
        const hashedPassword = await bycrypt.hash(password, 10)

        // create and save user to database
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        // JWT token to be implementated later
        const token = "jwt-token"

        res.status(201).json({
            userDetails: {
                username: user.username,
                email: user.email,
                token
            }
        })

    } catch(err) {
        return res.status(500).send("An Error occured.")
    }
}