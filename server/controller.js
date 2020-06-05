const bcrypt = require ('bcrypt'),
    express = require ('express'),
    session = require ('express-session');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get ('db')
        const {username, password} = req.body
        const existingUser = await db.check_user (username)
        if (existingUser [0]) {
            return res.status (409).send('Username already exists.')
        }
        const salt = bcrypt.genSaltSync (10)
        const hash = bcrypt.hashSync (password, salt)
        const newUser = await db.register_user ([username, hash])
        req.session.user = {
            id: newUser[0].id,
            username: newUser[0].username
        }
        res.status(200).send(req.session.user)
    }
}