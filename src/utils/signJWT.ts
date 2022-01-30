import config from "../../config/config";
import logger from "./logger";
import jwt from "jsonwebtoken";
import {UserDocument} from "../model/user.model";
const signJWT = (user: UserDocument, callback: (error: Error | null, token: string | null) => void): void => {
    let timeSinceEpoch = new Date().getTime();
    let expirationTime = timeSinceEpoch + Number(config.server.jwt_expiretime) * 100000;
    let expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    logger.info(`Attempting to sign token for ${user.email}`);

    try {
        jwt.sign(
            {
                email: user.email
            },
            config.server.jwt_secret,
            {
                issuer: config.server.jwt_issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        logger.error(error.message, error);
        callback(error, null);
    }
};

export default signJWT;
