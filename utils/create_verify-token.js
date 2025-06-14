import jwt from 'jsonwebtoken';

export const generateAuthToken = (user) => {

    const payload = {
        id: user._id,
        email: user.email,
    };

    const authToken = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h'});
    return authToken;
}

export const verifyToken = (token) => {
    if (!token) {
        console.error('No token provided');
        return null;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        return payload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}


