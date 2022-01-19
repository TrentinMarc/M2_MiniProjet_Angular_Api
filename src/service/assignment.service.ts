import {DocumentDefinition} from "mongoose";
import AssignmentModel, {AssignmentDocument} from "../model/assignment.model";

export async function createAssignment(input: DocumentDefinition<AssignmentDocument>) {
    try {
        return await AssignmentModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}
