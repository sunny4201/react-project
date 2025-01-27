const jwt = require('jsonwebtoken')

const authProduct = (req, res, next) => {

    const token = req.headers.authorization || req.headers.Authorization;
    console.log(token);
    if (!token) {
        return res.status(403).json({ message: "Unauthorized, JWT token is required." })
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECREAT);
        req.user = decode;
        // console.log("the decode user is ", req.user);
        next()
    } catch (error) {
        res.status(403).json({ message: "Unauthorized, JWT token is wrong or expired." });
    }

}

module.exports = authProduct;