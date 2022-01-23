import mongoose from "mongoose";

export interface MatiereDocument extends mongoose.Document {
    libelle: string;
    picLink: string;
}

const MatiereSchema: mongoose.Schema = new mongoose.Schema({
    libelle: {type: String, required: true},
    picLink: {type: String, required: true}
}, {
    timestamps: true
})

const MatiereModel = mongoose.model<MatiereDocument>("Matiere", MatiereSchema);

export default MatiereModel;
