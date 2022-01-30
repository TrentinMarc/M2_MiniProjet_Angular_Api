import {Request, Response} from "express";
import logger from "../utils/logger";
import {CreateUserInput, DeleteUserInput, GetAllUserInput, GetUserInput, LoginUserInput} from "../schema/user.schema";
import {deleteUser, getAllUser, createUser, findUser} from "../service/user.service";
import {omit} from "lodash";
import signJWT from "../utils/signJWT";

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        // @ts-ignore
        const user = await createUser(req.body);
        return res.send(user)
    } catch (e) {
        logger.error(e);
        if (e.code == 11000) {
            return res.status(409).send({errorMessage: "Cet email est déjà utilisé"})
        }
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function getAllUserHandler(req: Request<{}, {}, GetAllUserInput>, res: Response) {
    try {
        const users = await getAllUser();
        res.send(users);
    } catch (e) {
        logger.error(e);
        return res.status(400).send({errorMessage: e.message});
    }
}

export async function getUserHandler(req: Request<{}, {}, GetUserInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const userId = req.params.userId;
        // @ts-ignore
        const user = await findUser({_id: userId});

        if (!user)
            return res.sendStatus(404);

        return res.send(user);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function loginUserHandler(req: Request<{}, {}, LoginUserInput['body']>, res: Response) {
    try {
        // @ts-ignore
        const body = req.body;
        // @ts-ignore
        const user = await findUser({
            email: body.email,
            mdp: body.mdp
        });

        if (!user) {
            return res.sendStatus(404);
        }

        signJWT(user, (_error, token) => {
            if(_error){
                return res.status(401).json({
                    message: 'Accès non autorisé',
                    error: _error
                })
            }else if(token){
                res.status(200).json({
                    message: "Connexion réussie",
                    token: token,
                    user: omit(user, "mdp", "createdAt", "updatedAt")
                })
            }
        });
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function deleteOneUserHandler(req: Request<{}, {}, DeleteUserInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const userId = req.params.userId;
        // @ts-ignore
        const user = await findUser({_id: userId});
        if (!user)
            return res.sendStatus(404);

        await deleteUser({_id: userId});

        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}
