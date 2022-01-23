import mongoose from "mongoose";

export interface AssignmentDocument extends mongoose.Document {
    nom: string;
    dateDeRendu: Date;
    rendu: boolean;
    id: number;
    auteur: string;
    matiere: string;
    note: number;
    remarques: string;
}

const AssignmentSchema: mongoose.Schema = new mongoose.Schema({
    nom: {type: String, required: true},
    dateDeRendu: {type: Date, required: true},
    rendu: {type: Boolean, default: false},
    id: {type: Number},
    auteur: {type: String, required: true},
    matiere: {type: String, required: true},
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
