import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";
import MatiereModel, {MatiereDocument} from "../model/matiere.model";
import {util} from "zod/lib/helpers/util";
import Omit = util.Omit;


export async function createMatiere(input: DocumentDefinition<MatiereDocument>) {
    try {
        return await MatiereModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllMatiere(){
    try {
        return await MatiereModel.find()
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function  deleteMatiere(query: FilterQuery<MatiereDocument>){
    return MatiereModel.deleteOne(query);
}

export async function findMatiere(query: FilterQuery<MatiereDocument>, options: QueryOptions = {lean: true}) {
    try {
        const result = await MatiereModel.findOne(query, {}, options);
        return result;
    } catch (e: any) {
        throw new Error(e)
    }
}
