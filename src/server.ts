import express from "express";
import config from 'config'
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const PORT = config.get<number>('port')
const app = express()

//
// // const config = require('../config/config').getConfig()
// import * as config from '../config/config.js';
// import '../config/db'
// const PORT = config.PORT
//
// // console.log( '✔ Bootstrapping Application' );
// // console.log( `✔ Mode: ${config.MODE}` );
// // console.log( `✔ Port: ${PORT}` );
//
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, async () => {
    logger.info(`App listening on port ${PORT}! Direct url : http://localhost:${PORT}/`)

    await connect();

    routes(app);
})
