import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import getOrCreateDB from "./app/models/server/dbSetup";
import getOrCreateStorage from "./app/models/server/storageSetup";


export default async function middleware(request:NextRequest){
    await Promise.all([
        getOrCreateDB(),
        getOrCreateStorage()
    ])
    return NextResponse.next();
}

export const config={
    matcher:["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}