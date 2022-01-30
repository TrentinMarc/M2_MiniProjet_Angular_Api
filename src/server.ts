import express from "express";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import cors from 'cors';
import config from "../config/config";

const PORT = Number(config.server.port);
const app = express()

const allowedOrigins = ['*']

// const options: cors.CorsOptions = {
//     origin: allowedOrigins,
//     methods: 'GET, POST, DELETE'
// }
const NAMESPACE = "Server";
app.use(express.json())
// app.use(cors(options))
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});
app.listen(PORT, async () => {
    logger.info(`App listening on port ${PORT}! Direct url : http://localhost:${PORT}/`, [

    ])

    await connect();

    routes(app);
})
