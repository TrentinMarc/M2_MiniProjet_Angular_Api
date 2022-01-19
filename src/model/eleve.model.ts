import {Schema, Document, model} from "mongoose";

interface Eleve {
    _id: string;
    nom: string;
    prenom: string;
}

const schema = new Schema<Eleve>({
    _id: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true }
});

const EleveModel = model<Eleve>('Eleve', schema);
