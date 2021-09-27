const jwt = require('jsonwebtoken');
const config = require('../config/index.js');

const validate = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.redirect('/user/login');
    try {
        const verified = jwt.verify(token, config.TOKEN)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({error: 'Access denied'})
    }
}

module.exports = validate;