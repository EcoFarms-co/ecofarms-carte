const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    if (req.header('Authorization')) {
        const token = req.header('Authorization').replace('Bearer ', '')
        if (token !== "undefined") {
            try {

                const decoded = jwt.verify(token, 'ecofarmtokengeneration')
                const user = await User.findById(decoded._id)
                if (!user) {
                    throw new Error()
                }
                req.token = token
                req.user = user
                next()
            } catch (e) {
                res.status(401).send({ error: 'Please authenticate.' })
            }
        } else {
            res.status(401).send({ error: 'Please authenticate.' })
        }
    }
    else {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth