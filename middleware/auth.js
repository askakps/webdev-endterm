const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'd0a2f6bfec7356b37a9b5b01e7f7c0f0285c388a687b9e87f4460d4e5c8e7a62');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
