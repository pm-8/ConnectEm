const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    console.log("AuthMiddleware is running...");
    try {
        // Example logic to parse token from cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        req.user = decoded;
        next();
    } catch (err) {
        console.error("Error in authMiddleware:", err.message);
        res.status(401).json({ message: "Unauthorized" });
    }
};


module.exports = authMiddleware;
