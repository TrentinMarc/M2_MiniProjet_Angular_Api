import {Request, Response} from "express";
import logger from "../utils/logger";
import {createAssignment} from "../service/assignment.service";
import { CreateAssignmentInput } from "../schema/assignment.schema";

export async function createAssignmentHandler(req: Request<{}, {}, CreateAssignmentInput['body']>, res: Response) {
    try {
        // @ts-ignore
        const assignment = await createAssignment(req.body);
    } catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}
