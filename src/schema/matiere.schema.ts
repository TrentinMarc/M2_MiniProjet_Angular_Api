import { object, string, TypeOf } from "zod";

export const createMatiereSchema = object({
  body: object({
    libelle: string({
      required_error: "La saisie du libellé de la matière est requise"
    }).nonempty(),
    picLink: string({
      required_error: "La saisie de l'Url d'une photo représentant la matière est requise"
    })
      .nonempty()
      .url({
      message: "L'url saisit n'est pas recevable"
    }),
  })
});

export type CreateMatiereInput = TypeOf<typeof createMatiereSchema>;
