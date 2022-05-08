import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers["authorization"]

    if (!token) {
        return res.status(403).send("Login required!")
    }

    try {
        token = token.replace(/^Bearer\s+/, "")
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = decoded
    } catch(err) {
        return res.status(401).send("Invalid token")
    }

    return next()
}

export default verifyToken