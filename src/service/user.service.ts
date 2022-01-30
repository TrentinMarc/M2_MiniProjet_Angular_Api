import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";
import { omit } from "lodash";
import UserModel, {UserDocument} from "../model/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        const user = await UserModel.create(input)
        return omit(user.toJSON(), "mdp")
    } catch (e: any) {
        throw e
    }
}

export async function getAllUser() {
    try {
        return await UserModel.find();
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = {lean: true}) {
    try {
        const result = await UserModel.findOne(query, {}, options);
        return result;
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function deleteUser(query: FilterQuery<UserDocument>) {
    return UserModel.deleteOne(query);
}
