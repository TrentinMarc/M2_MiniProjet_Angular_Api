import {Request, Response} from "express";
import logger from "../utils/logger";
import {createAssignment} from "../service/assignment.service";

export async function createAssignmentHandler(req: Request, res: Response) {
    try {
        const assignment = await createAssignment(req.body);
    } catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}
