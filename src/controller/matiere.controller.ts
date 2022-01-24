import {Request, Response} from "express";
import logger from "../utils/logger";
import {createMatiere, deleteMatiere, getAllMatiere, findMatiere} from "../service/matiere.service";
import {CreateMatiereInput, DeleteMatiereInput, GetMatiereInput} from "../schema/matiere.schema";

export async function createMatiereHandler(req: Request<{}, {}, CreateMatiereInput['body'], {}>, res: Response) {
    try {
        // @ts-ignore
        const matiere = await createMatiere(req.body);
        return res.send(matiere);
    } catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getAllMatiereHandler(req: Request, res: Response) {
    try {
        const matieres = await getAllMatiere();
        return res.send(matieres);
    } catch (e) {
        logger.error(e);
        return res.status(400).send(e.message);
    }
}

export async function getMatiereHandler(req: Request<{}, {}, GetMatiereInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const matiereId = req.params.matiereId;
        // @ts-ignore
        const matiere = await findMatiere({_id: matiereId});

        if (!matiere)
            return res.sendStatus(404);

        return res.send(matiere);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function deleteOneMatiereHandler(req: Request<{}, {}, DeleteMatiereInput['params']>, res: Response){
    try {
        // @ts-ignore
        const matiereId = req.params.matiereId;
        // @ts-ignore
        const matiere = await findMatiere({_id: matiereId});
        if (!matiere)
            return res.sendStatus(404);

        await deleteMatiere({_id : matiereId});

        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}
