import {Express, Request, Response} from 'express'
import {createAssignmentHandler} from "./controller/assignment.controller";
import validateRessource from "./middleware/validateRessource";
import { createAssignmentSchema } from "./schema/assignment.schema";
import { createMatiereSchema } from "./schema/matiere.schema";
import { createMatiereHandler } from "./controller/matiere.controller";
import { createEleveSchema } from "./schema/eleve.schema";
import { createEleveHandler } from "./controller/eleve.controller";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    app.post('/api/assignment', validateRessource(createAssignmentSchema),createAssignmentHandler) //41.26

    app.post('/api/matiere', validateRessource(createMatiereSchema), createMatiereHandler)

    app.post('/api/eleve', validateRessource(createEleveSchema), createEleveHandler)
}

export default routes;
