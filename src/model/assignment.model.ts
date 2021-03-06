import mongoose from "mongoose";
import {EleveDocument} from "./eleve.model";
import {MatiereDocument} from "./matiere.model";

export interface AssignmentDocument extends mongoose.Document {
    nom: string;
    dateDeRendu: string;
    rendu: boolean;
    auteur: EleveDocument['_id'];
    matiere: MatiereDocument['_id'];
    note: number;
    remarques: string;
}

const AssignmentSchema: mongoose.Schema = new mongoose.Schema({
    nom: {type: String, required: true},
    dateDeRendu: {type: String, required: true},
    rendu: {type: Boolean, default: false},
    auteur: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Eleve"},
    matiere: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Matiere"},
    note: {type: Number},
    remarques: {type: String}
}, {
    timestamps: true
})

/* https://youtu.be/BWUi6BS9T5Y?t=1940
Pas utile pour l'instant car permet de gerer des pwd

AssignmentSchema.pre("save", async function (next: any){
    let assignment = this as AssignmentDocument
    if(!assignment.isModified){
        // blabla
    }
});
*/

const AssignmentModel = mongoose.model("Assignment", AssignmentSchema);

export default AssignmentModel;
