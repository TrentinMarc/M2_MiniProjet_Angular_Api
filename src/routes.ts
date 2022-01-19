import {Express, Request, Response} from 'express'
import {createAssignmentHandler} from "./controller/assignment.controller";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    app.post('api/assignment', createAssignmentHandler) //41.26
}

export default routes;
