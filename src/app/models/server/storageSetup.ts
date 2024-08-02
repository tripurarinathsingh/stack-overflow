import {Permission} from "node-appwrite"
import {storage} from "./config"
import {questionAttachmentBucket} from "../name"


export default async function getOrCreateStorage(){

    try{
        await storage.getBucket(questionAttachmentBucket);
        console.log("storage connected");
    }
    catch(error){
        try{
            await storage.createBucket(questionAttachmentBucket,questionAttachmentBucket,[
                Permission.write("users"),
                Permission.create("users"),
                Permission.read("users"),
                Permission.read("any"),
                Permission.update("users"),
                Permission.delete("users")
            ],false,undefined,undefined,["jpeg","png","gif","webp","jpeg","heic"]);

            console.log("storage is created and connected");
        }
        catch(error){
            console.log("error occured in creating storage bucket:",error)
        }

    }

    
}