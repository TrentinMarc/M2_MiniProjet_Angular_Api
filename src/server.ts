import express from "express";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import cors from 'cors';
import config from "../config/config";

const PORT = Number(config.server.port);
const app = express()

const allowedOrigins = ['*']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: 'GET, POST, DELETE'
}
const NAMESPACE = "Server";
app.use(express.json())
// app.use(cors(options))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.listen(PORT, async () => {
    logger.info(`App listening on port ${PORT}! Direct url : http://localhost:${PORT}/`, [

    ])

    await connect();

    routes(app);
})
