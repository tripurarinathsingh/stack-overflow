import {IndexType,Permission} from "node-appwrite"
import {commentCollection,db} from "../name"
import {databases} from "./config"

export default async function createCommentCollection(){
    await databases.createCollection(db,commentCollection,commentCollection,[
        Permission.write("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
        Permission.read("any"),
        Permission.read("users")


    ])
    console.log("Comment collection is created");

    await Promise.all([
        databases.createStringAttribute(db,commentCollection,"content",10000,true),
        databases.createEnumAttribute(db,commentCollection,"type",["answer","question"],true),
        databases.createStringAttribute(db,commentCollection,"typeId",50,true),
        databases.createStringAttribute(db,commentCollection,"authorId",50,true)
    ])

    console.log("Comment attribute created");
}