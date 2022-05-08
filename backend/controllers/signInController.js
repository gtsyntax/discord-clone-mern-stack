import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body

        // finding the user in the database
        const user = await User.findOne({ email: email.toLowerCase() })

        // checking if the provided password corresponds to the one in the database
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = "jwt-token"

            return res.status(200).json({
                userDetails: {
                    username: user.username,
                    email: user.email,
                    token,
                }
            })
        }

        return res.status(400).send("Invalid login details.")
    } catch(err) {
        console.error(err)
        return res.status(500).send("An Error occured!")
    }
}