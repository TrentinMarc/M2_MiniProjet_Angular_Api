import mongoose from 'mongoose';
import config from "config";
import logger from "./logger";

function connect() {
    const dbUri = config.get<string>('dbUri');
    return mongoose.connect(dbUri)
        .then(() => {
            logger.info('Connected to DB')
        })
        .catch((error) => {
            logger.error("Connection to DB failed : " + error)
            process.exit()
        })
}

export default connect;
