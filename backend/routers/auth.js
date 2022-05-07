import express from "express"

const router = express.Router()

router.post("/sign-up", (req, res) => {
    //console.log(req.body)
    res.send("Sign up")
})

router.post("/sign-in", (req, res) => {
    //console.log(req.body)
    res.send("Sign in")
})

export default router