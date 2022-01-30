import {Express, Request, Response} from 'express'
import {
    createAssignmentHandler, deleteOneAssignmentHandler,
    getAllAssignmentHandler,
    getAssignmentHandler, getSizeHandler
} from "./controller/assignment.controller";
import validateRessource from "./middleware/validateRessource";
import {createAssignmentSchema, deleteAssignmentSchema, getAssignmentSchema} from "./schema/assignment.schema";
import {createMatiereSchema, deleteMatiereSchema, getMatiereSchema} from "./schema/matiere.schema";
import {
    createMatiereHandler,
    deleteOneMatiereHandler,
    getAllMatiereHandler,
    getMatiereHandler
} from "./controller/matiere.controller";
import {createEleveSchema, deleteEleveSchema, getEleveSchema} from "./schema/eleve.schema";
import {
    createEleveHandler,
    deleteOneEleveHandler,
    getAllEleveHandler,
    getEleveHandler
} from "./controller/eleve.controller";
import {createUserSchema, getSizeSchema, getUserSchema, loginUserSchema} from "./schema/user.schema";
import {createUserHandler, getAllUserHandler, getUserHandler, loginUserHandler} from "./controller/user.controller";
import extractJWT from "./middleware/extractJWT";

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    // Assignment
    app.get('/api/assignment/size', validateRessource(getSizeSchema), getSizeHandler)
    app.post('/api/assignment', validateRessource(createAssignmentSchema), createAssignmentHandler); // 41.26
    app.get('/api/assignment/all/:limit/:page', getAllAssignmentHandler);
    app.get('/api/assignment/:assignmentId', validateRessource(getAssignmentSchema), getAssignmentHandler)
    app.delete('/api/assignment/:assignmentId', validateRessource(deleteAssignmentSchema), deleteOneAssignmentHandler)


    // Matiere
    app.post('/api/matiere', validateRessource(createMatiereSchema), createMatiereHandler);
    app.get('/api/matiere', getAllMatiereHandler)
    app.get('/api/matiere/:matiereId', validateRessource(getMatiereSchema), getMatiereHandler)
    app.delete('/api/matiere/:matiereId', validateRessource(deleteMatiereSchema), deleteOneMatiereHandler)

    // Eleve
    app.post('/api/eleve', validateRessource(createEleveSchema), createEleveHandler);
    app.get('/api/eleve', getAllEleveHandler);
    app.get('/api/eleve/:eleveId', validateRessource(getEleveSchema), getEleveHandler)
    app.delete('/api/eleve/:eleveId', validateRessource(deleteEleveSchema), deleteOneEleveHandler)

    // User
    app.get('/api/user', extractJWT, getAllUserHandler)
    app.post('/api/user', validateRessource(createUserSchema), createUserHandler)
    app.post('/api/user/login', validateRessource(loginUserSchema), loginUserHandler)
}

export default routes;
