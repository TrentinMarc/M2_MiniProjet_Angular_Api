import {object, string, TypeOf} from "zod";

const payload = {
    body: object({
        email: string({
            required_error: "La saisie d'un email est obligatoire"
        })
            .email("L'adresse mail saisie est incompatible"),
        nom: string({
            required_error: "La saisie du nom est requise"
        }),
        prenom: string({
            required_error: "La saisie du prénom est requise"
        })
    })
}

const params = {
    params: object({
        eleveId: string({
            required_error: "Identifiant de l'eleve obligatoire"
        })
    })
}
export const createEleveSchema = object({
    ...payload
});

export const getEleveSchema = object({
    ...params
})

export  const deleteEleveSchema = object({
    ...params
})

export type CreateEleveInput = TypeOf<typeof createEleveSchema>
export type GetEleveInput = TypeOf<typeof getEleveSchema>
export type DeleteEleveInput = TypeOf<typeof deleteEleveSchema>
