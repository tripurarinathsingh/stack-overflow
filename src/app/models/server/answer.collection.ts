import {Permission} from "node-appwrite"
import {answerCollection,db} from "../name"
import {databases} from "./config"

export default async function createAnswerCollection(){
    await databases.createCollection(db,answerCollection,answerCollection,[
        Permission.write("users"),
        Permission.create("users"),
        Permission.delete("users"),
        Permission.read("users"),
        Permission.read("any"),
        Permission.update("users")


    ]);

    console.log("answer collection is collected");

    await Promise.all([
        databases.createStringAttribute(db,answerCollection,"content",10000,true),
        databases.createStringAttribute(db,answerCollection,"questionId",50,true),
        databases.createStringAttribute(db,answerCollection,"authorId",50,true)
    ])
    console.log("Answer attribute created");

}
