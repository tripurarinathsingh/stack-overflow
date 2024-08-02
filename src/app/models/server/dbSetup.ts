import {db} from "../name"
import createVoteCollection from "./vote.collection"
import createCommentCollection from "./comment.collection"
import createAnswerCollection from "./answer.collection"
import createQuestionCollection from "./question.collection"
import {databases} from "./config"

export default async function getOrCreateDB(){
    try{
        await databases.get(db);
        console.log("database is connected");
    }
    catch(error){
        try{
            await databases.create(db,db);
            console.log("database is created");

            await Promise.all([
                createAnswerCollection(),
                createCommentCollection(),
                createQuestionCollection(),
                createVoteCollection()
            ])
            console.log("database connected")
        }
        catch(error){
            console.log("error in database connection:",error);
        }
    }

    return databases
}
