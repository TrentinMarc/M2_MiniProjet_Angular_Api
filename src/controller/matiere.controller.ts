import {Request, Response} from "express";
import logger from "../utils/logger";
import {createMatiere} from "../service/matiere.service";
import { CreateMatiereInput } from "../schema/matiere.schema";

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
