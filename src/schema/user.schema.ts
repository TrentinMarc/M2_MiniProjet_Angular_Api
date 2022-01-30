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
        }),
        mdp: string({
            required_error: "La saisie du mdp est requise"
        }).min(6, 'Le mot de passe doit contenir 6 caractères minimum')
    })
}
const params = {
    params: object({
        userId: string({
            required_error: "Identifiant de l'user obligatoire"
        })
    })
}
const loginPayload = {
    body: object({
        email: string({
            required_error: "La saisie d'un email est obligatoire"
        }),
        mdp: string({
            required_error: "La saisie du mdp est requise"
        })
    })
}
export const createUserSchema = object({
    ...payload
});

export const getUserSchema = object({
    ...params
})

export  const deleteUserSchema = object({
    ...params
})

export const loginUserSchema = object({
    ...loginPayload
})

export const getSizeSchema = object({});
export const getAllUserSchema = object({});
export type LoginUserInput = TypeOf<typeof loginUserSchema>
export type CreateUserInput = TypeOf<typeof createUserSchema>
export type GetUserInput = TypeOf<typeof getUserSchema>
export type DeleteUserInput = TypeOf<typeof deleteUserSchema>
export type GetAllUserInput = TypeOf<typeof getAllUserSchema>
export type GetSizeInput = TypeOf<typeof getSizeSchema>
