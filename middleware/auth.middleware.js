const jwt = require('jsonwebtoken');
require("dotenv").config()
const auth = (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    try {
        if (token) {
            let decoded = jwt.verify(token, process.env.KEY)
            if (decoded) {
                next()
            } else {
                res.status(400).json({ msg: "Wrong Credentials" })
            }
        } else {

            res.status(401).json({ msg: "Please Login in " })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    auth
}