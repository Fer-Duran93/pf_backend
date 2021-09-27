const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    // validaciones
    ...

    // create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)
    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
})