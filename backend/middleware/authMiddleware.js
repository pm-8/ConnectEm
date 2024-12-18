const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Retrieve token from cookies
    console.log("Token received from cookie:", token);

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Attach user data to req.user
        next();
    } catch (err) {
        console.error("Token verification failed:", err.message);
        res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = authMiddleware;
