import {DocumentDefinition} from "mongoose";
import MatiereModel, { MatiereDocument } from "../model/matiere.model";

export async function createMatiere(input: DocumentDefinition<MatiereDocument>) {
  try {
    return await MatiereModel.create(input)
  } catch (e: any) {
    throw new Error(e)
  }
}
