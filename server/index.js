require ('dotenv').config ();
const express = require ('express'),
    app = express (),
    massive = require ('massive'),
    session = require ('express-session'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authCtrl = require ('./authController')
const postCtrl = require ('./postController')

app.use (express.json())
app.use (
    session ({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
        secret: SESSION_SECRET
    })
)

// Auth Endpoints
app.post ('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

// Post Endpoints
app.get ('/api/posts', postCtrl.getPosts)

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set ('db', db)
    app.listen (SERVER_PORT, () => console.log (`Helo says 'hello' on port ${SERVER_PORT}`))
    console.log ('db connected')
})

