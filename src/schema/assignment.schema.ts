import { date, number, object, string, TypeOf } from "zod";

export const createAssignmentSchema = object({
  body: object({
    nom: string({
      required_error : "Saisie du nom requise"
    }),
    dateDeRendu: date({
      required_error: "Saisie de la date de rendu requise"
    }),
    auteur: string({
      required_error: "Saisie de l'auteur requise"
    }),
    note: number()
      .min(0, "La note ne peut pas pas être inférieur à 0")
      .max(20, "La note ne peut pas excéder 20"),
    matiere: string({
      required_error: "La saisie de la matière est requise"
    })
  })
})

export type CreateAssignmentInput = TypeOf<typeof createAssignmentSchema>;
