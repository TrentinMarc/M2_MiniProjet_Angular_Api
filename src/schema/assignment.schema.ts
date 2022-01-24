import {date, number, object, string, TypeOf} from "zod";

const payload = {
    body: object({
        nom: string({
            required_error: "Saisie du nom requise"
        }),
        dateDeRendu: string({
            required_error: "Saisie de la date de rendu requise"
        }),
        auteur: string({
            required_error: "Saisie de l'auteur requise"
        }),
        note: number()
            .min(0, "La note ne peut pas pas être inférieur à 0")
            .max(20, "La note ne peut pas excéder 20").nullable(),
        matiere: string({
            required_error: "La saisie de la matière est requise"
        }),
        remarques: string().max(200, "Les remarques sont limités à 200 caractères").nullable()
    })
}

const params = {
    params: object({
        assignmentId: string({
            required_error: "Identifiant de l'assignment obligatoire"
        })

    })
}
export const createAssignmentSchema = object({
    ...payload
})

export const getAssignmentSchema = object({
    ...params
})

export const deleteAssignmentSchema = object({
    ...params
})

export type CreateAssignmentInput = TypeOf<typeof createAssignmentSchema>;
export type GetAssignmentInput = TypeOf<typeof getAssignmentSchema>;
export type DeleteAssignmentInput = TypeOf<typeof deleteAssignmentSchema>;
