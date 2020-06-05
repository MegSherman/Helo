require ('dotenv').config ();
const express = require ('express'),
    app = express (),
    massive = require ('massive'),
    {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use (express.json())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set ('db', db)
    app.listen (SERVER_PORT, () => console.log (`Helo says 'hello' on port ${SERVER_PORT}`))
    console.log ('db connected')
})

