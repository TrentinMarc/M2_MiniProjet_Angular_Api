import mongoose from "mongoose";

export interface EleveDocument extends mongoose.Document {
    nom: string;
    prenom: string;
}

const EleveSchema: mongoose.Schema = new mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true}
}, {
    timestamps: true
})

const EleveModel = mongoose.model("Eleve", EleveSchema);

export default EleveModel;
