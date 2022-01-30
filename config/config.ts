import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const FRONT_BASE_URL = process.env.FRONT_BASE_URL;
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "randomstring";
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "issuer";

const MONGO = {
    dbUri: MONGO_URI
}

const SERVER = {
    port: PORT,
    frontUrl: FRONT_BASE_URL,
    jwt_secret: SERVER_TOKEN_SECRET,
    jwt_expiretime: SERVER_TOKEN_EXPIRETIME,
    jwt_issuer: SERVER_TOKEN_ISSUER
}

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
