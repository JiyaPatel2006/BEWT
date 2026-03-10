import { NextRequest,NextResponse } from "next/server";
import {connection} from "../../../lib/mongoDb";
import Task from "../model/task";

export async function GET(req:NextRequest){
    try{    
        await connection();
        const task = await Task.find()
        console.log(task);

        return NextResponse.json(task)
    }
    catch(err){
        return NextResponse.json(err);   
    }
}