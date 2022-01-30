import mongoose from "mongoose";


export interface UserDocument extends mongoose.Document {
    email: string;
    nom: string;
    prenom: string;
    mdp: string;
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    mdp: {type: String, required: true}
}, {
    timestamps: true
})

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
