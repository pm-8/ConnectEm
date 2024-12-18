const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(" ")[1];
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token,process.env.SECRET_KEY);
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;