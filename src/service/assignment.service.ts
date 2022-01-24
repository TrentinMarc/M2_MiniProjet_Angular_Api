import {DocumentDefinition, QueryOptions, FilterQuery} from "mongoose";
import AssignmentModel, {AssignmentDocument} from "../model/assignment.model";

export async function createAssignment(input: DocumentDefinition<AssignmentDocument>) {
    try {
        return await AssignmentModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function getAllAssignment() {
    try {
        return await AssignmentModel.find()
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function findAssignment(query: FilterQuery<AssignmentDocument>, options: QueryOptions = {lean: true}) {
    try {
        const result = await AssignmentModel.findOne(query, {}, options);
        return result;
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function  deleteAssignment(query: FilterQuery<AssignmentDocument>){
    return AssignmentModel.deleteOne(query);
}
