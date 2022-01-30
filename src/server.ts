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
app.use(cors(options))
app.listen(PORT, async () => {
    logger.info(`App listening on port ${PORT}! Direct url : http://localhost:${PORT}/`, [

    ])

    await connect();

    routes(app);
})
