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
        // console.log(newUser)
        req.session.user = {
            id: newUser[0].id,
            username: newUser[0].username
        }
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get ('db')
        const existingUser = await db.check_user (username)
        if (!existingUser [0]) {
            return res.status(404).send('Username or password incorrect.')
        }
        console.log(password, existingUser)
        const authenticated = bcrypt.compareSync (password, existingUser[0].password)
        if (!authenticated) {
        return res.status(403).send('Username or password incorrect.')
        }
        delete existingUser[0].password
        req.session.user = existingUser[0]
        res.status(200).send(req.session.user)
    }
}