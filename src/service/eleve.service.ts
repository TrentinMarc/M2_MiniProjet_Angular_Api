import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";
import EleveModel, {EleveDocument} from "../model/eleve.model";

export async function createEleve(input: DocumentDefinition<EleveDocument>) {
    try {
        return await EleveModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllEleve() {
    try {
        return await EleveModel.find();
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findEleve(query: FilterQuery<EleveDocument>, options: QueryOptions = {lean: true}) {
    try {
        const result = await EleveModel.findOne(query, {}, options);
        return result;
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function deleteEleve(query: FilterQuery<EleveDocument>) {
    return EleveModel.deleteOne(query);
}
