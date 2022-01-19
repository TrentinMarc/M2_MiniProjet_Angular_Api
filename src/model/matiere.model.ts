import {Schema, Document, model} from "mongoose";

interface Matiere {
    _id: string;
    libelle: string;
    picLink: string;
}

const schema = new Schema<Matiere>({
    _id: {type: String, required: true},
    libelle: {type: String, required: true},
    picLink: {type: String, required: false}
});

const MatiereModel = model<Matiere>('Matiere', schema);

