import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from "express";
import config from "../../config/config";



const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    if(token){
        jwt.verify(token, config.server.jwt_secret, (error, decoded) => {
            if(error){
                return res.status(404).json({
                    message: error.message,
                    error
                })
            }else{
                res.locals.jwt = decoded;
                next();
            }
        });
    }else{
        return res.status(401).json({
            message: "Requête non autorisée..."
        })
    }
}

export default extractJWT;
