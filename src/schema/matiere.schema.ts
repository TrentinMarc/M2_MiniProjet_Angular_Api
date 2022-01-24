import {object, string, TypeOf} from "zod";

const payload = {
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
};

const params = {
    params: object({
        matiereId: string({
            required_error: "Identifiant de la matière obligatoire"
        })

    })
};
export const createMatiereSchema = object({
    ...payload
});

export const getMatiereSchema = object({
    ...params
});

export const deleteMatiereSchema = object({
    ...params
});
export type CreateMatiereInput = TypeOf<typeof createMatiereSchema>;
export type GetMatiereInput = TypeOf<typeof getMatiereSchema>;
export type DeleteMatiereInput = TypeOf<typeof deleteMatiereSchema>;
