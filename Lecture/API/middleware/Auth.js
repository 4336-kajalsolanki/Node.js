const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(400).send({
                success: false,
                message: "Token Is Blank",
            })
        }
        let newtoken = token.slice(7);
        jwt.verify(newtoken, "rnw3", (err, decodeToken) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: "Token Is Not Valid",
                })
            }
            req.user = decodeToken.payload;
            return next();
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}

const Admin = async (req, res, next) => {
    try {
        if (req.user.role != "admin") {
            return res.status(400).send({
                success: false,
                message: "Unauthorized Access",
            })
        }
        return next();
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}

module.exports = {
    verifyToken, Admin
}