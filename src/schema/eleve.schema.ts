import { object, string, TypeOf } from "zod";

export const createEleveSchema = object({
  body: object({
    nom: string({
      required_error: "La saisie du nom est requise"
    }),
    prenom: string({
      required_error: "La saisie du prénom est requise"
    })
  })
});

export type CreateEleveInput = TypeOf<typeof createEleveSchema>
