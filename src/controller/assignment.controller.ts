import {Request, Response} from "express";
import logger from "../utils/logger";
import {
    createAssignment,
    deleteAssignment,
    findAssignment,
    getAllAssignment,
    getSize
} from "../service/assignment.service";
import {CreateAssignmentInput, DeleteAssignmentInput, GetAssignmentInput} from "../schema/assignment.schema";
import {GetSizeInput} from "../schema/user.schema";

export async function createAssignmentHandler(req: Request<{}, {}, CreateAssignmentInput['body']>, res: Response) {
    try {
        // @ts-ignore
        const assignment = await createAssignment(req.body);
        return res.send(assignment);
    } catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}

export async function getAssignmentHandler(req: Request<{}, {}, GetAssignmentInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const assignmentId = req.params.assignmentId;
        // @ts-ignore
        const assignment = await findAssignment({_id: assignmentId});

        if (!assignment)
            return res.sendStatus(404);

        return res.send(assignment);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function deleteOneAssignmentHandler(req: Request<{}, {}, DeleteAssignmentInput['params']>, res: Response) {
    try {
        // @ts-ignore
        const assignmentId = req.params.assignmentId;
        // @ts-ignore
        const assignment = await findAssignment({_id: assignmentId});
        if (!assignment)
            return res.sendStatus(404);

        await deleteAssignment({_id: assignmentId});

        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}
export async function getSizeHandler(req: Request<{}, {}, GetSizeInput>, res: Response) {
    try {
        const size = await getSize();
        return res.json(size);
    } catch (e) {
        logger.error(e);
        return res.status(409).send({errorMessage: e.message});
    }
}

export async function getAllAssignmentHandler(req: Request, res: Response) {
    try {
        const limit = req.params.limit;
        const page = req.params.page;
        const assignment = await getAllAssignment(Number(limit), Number(page));
        return res.send(assignment);
    } catch (e) {
        logger.error(e);
        return res.status(400).send(e.message);
    }
}
