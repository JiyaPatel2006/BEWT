import { NextRequest,NextResponse } from "next/server";
import {connection} from "../../../lib/mongoDb";
import User from "../model/user";

export async function GET(req:NextRequest){
    try{    
        await connection();
        const user = await User.find()
        console.log(user);

        return NextResponse.json(user)
    }
    catch(err){
        return NextResponse.json(err);   
    }
}