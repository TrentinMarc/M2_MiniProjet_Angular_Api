const express = require('express')
require('dotenv').config()
const app = express()

const config = require('./config/config').getConfig()
require('./config/db')
const PORT = config.PORT

console.log( '✔ Bootstrapping Application' );
console.log( `✔ Mode: ${config.MODE}` );
console.log( `✔ Port: ${PORT}` );

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`App listening on port ${PORT}! \nDirect url : http://localhost:${PORT}/`))