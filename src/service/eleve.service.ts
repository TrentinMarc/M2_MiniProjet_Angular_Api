import {DocumentDefinition} from "mongoose";
import EleveModel, { EleveDocument } from "../model/eleve.model";

export async function createEleve(input: DocumentDefinition<EleveDocument>) {
  try {
    return await EleveModel.create(input)
  } catch (e: any) {
    throw new Error(e)
  }
}
