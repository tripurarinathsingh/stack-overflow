import {Permission} from "node-appwrite"
import {databases} from "./config"
import {db,voteCollection} from "../name"

export default async function createVoteCollection(){

    await databases.createCollection(db,voteCollection,voteCollection,[
        Permission.write("users"),
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users")
        
    ])

    console.log("vote collection is created");

    await Promise.all([
        databases.createEnumAttribute(db,voteCollection,"type",["answer","question"],true),
        databases.createStringAttribute(db,voteCollection,"typeId",50,true),
        databases.createEnumAttribute(db,voteCollection,"voteStatus",["upvote","downvote"],true),
        databases.createStringAttribute(db,voteCollection,"voterId",50,true)

    ]);

    console.log("vote Attribute is created");
}