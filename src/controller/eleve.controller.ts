import {Request, Response} from "express";
import logger from "../utils/logger";
import {createEleve, deleteEleve, getAllEleve, findEleve} from "../service/eleve.service";
import {CreateEleveInput, DeleteEleveInput, GetEleveInput} from "../schema/eleve.schema";

export async function createEleveHandler(req: Request<{}, {}, CreateEleveInput["body"]>, res: Response) {
    try {
        // @ts-ignore
        const eleve = await createEleve(req.body);
        return res.send(eleve)
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function getAllEleveHandler(req: Request, res: Response){
    try {
        const eleves  = await getAllEleve();
        res.send(eleves);
    }catch (e) {
        logger.error(e);
        return res.status(400).send({errorMessage: e.message});
    }
}

export async function getEleveHandler(req: Request<{}, {}, GetEleveInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const eleveId = req.params.eleveId;
        // @ts-ignore
        const eleve = await findEleve({_id: eleveId});

        if (!eleve)
            return res.sendStatus(404);

        return res.send(eleve);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function deleteOneEleveHandler(req: Request<{}, {}, DeleteEleveInput['params']>, res: Response){
    try {
        // @ts-ignore
        const eleveId = req.params.eleveId;
        // @ts-ignore
        const eleve = await findEleve({_id: eleveId});
        if (!eleve)
            return res.sendStatus(404);

        await deleteEleve({_id : eleveId});

        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}
