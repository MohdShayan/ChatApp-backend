import { verifyToken } from '../utils/create_verify-token.js';

export function checkForAuthCookie(cookieName) {
    return (req, res, next) => {
        const token = req.cookies[cookieName];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in.",
      });
    }
        try {
            const payload = verifyToken(token);
            req.user = payload;
            
        } catch (error) {
            console.error('Token verification failed:', error);
        }
        
        return next();
    }
}
