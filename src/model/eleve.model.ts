import mongoose from "mongoose";

export interface EleveDocument extends mongoose.Document {
    email: string;
    nom: string;
    prenom: string;
}

const EleveSchema: mongoose.Schema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    nom: {type: String, required: true},
    prenom: {type: String, required: true}
}, {
    timestamps: true
})

const EleveModel = mongoose.model("Eleve", EleveSchema);

export default EleveModel;
