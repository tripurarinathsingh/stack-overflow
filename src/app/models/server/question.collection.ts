import {Permission} from "node-appwrite"
import {databases} from "./config"
import {db,questionCollection} from "../name"

export default async function createQuestionCollection(){
    await databases.createCollection(db,questionCollection,questionCollection,[
        Permission.write("users"),
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users")
    ])

    console.log("question collection is created");

    await Promise.all(
        [
            databases.createStringAttribute("db",questionCollection,"title",20,true),
            databases.createStringAttribute("db",questionCollection,"content",10000,true),
            databases.createStringAttribute("db",questionCollection,"authorId",50,true),
            databases.createStringAttribute("db",questionCollection,"tags",50,true,undefined,true),
            databases.createStringAttribute("db",questionCollection,"attachmentId",50,false)
            
            
        ]
    )

    console.log("question attribute is created")
}