// export async function GET
import { NextRequest,NextResponse } from "next/server";
import {connection} from "../../../../lib/mongoDb"
import user from "../../model/user";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:number}>}) {
    try{
        await connection();
        const {id}=await params;
        const User = await user.findById(id)
        return NextResponse.json(User);
    }
    catch(err){
        return NextResponse.json(err)
    }
}