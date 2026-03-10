// export async function GET
import { NextRequest,NextResponse } from "next/server";
import {connection} from "../../../../lib/mongoDb"
import task from "../../model/task";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:number}>}) {
    try{
        await connection();
        const {id}=await params;
        const Task = await task.findById(id)
        return NextResponse.json(Task);
    }
    catch(err){
        return NextResponse.json(err)
    }
}