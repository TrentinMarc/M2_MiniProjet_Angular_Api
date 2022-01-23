import {Request, Response} from "express";
import logger from "../utils/logger";
import {createEleve} from "../service/eleve.service";
import { CreateEleveInput } from "../schema/eleve.schema";

export async function createEleveHandler(req: Request<{}, {}, CreateEleveInput["body"]>, res: Response) {
  try {
    // @ts-ignore
    const eleve = await createEleve(req.body);
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
