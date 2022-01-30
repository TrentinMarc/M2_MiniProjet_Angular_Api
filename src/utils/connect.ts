import mongoose from 'mongoose';
import logger from "./logger";
import config from "../../config/config";

function connect() {
    const dbUri = config.mongo.dbUri;
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
