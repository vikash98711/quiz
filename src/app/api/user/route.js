import { connectionStr } from "@/utils/dbconnection";
// import { Admin } from "@/utils/model/admin";
import {User} from '@/utils/model/user';
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(req){ 
    try {
        await mongoose.connect(connectionStr)
        const data = await User.find() 
        return NextResponse.json(data, {status: 200}) 
    } catch (error) {
        return NextResponse.json({message: "server error"}, {status: 500}) 
    }
}

export async function POST(req){
    
    const payload = await req.json() 
    console.log(payload,"payload");
    
    try {
        await mongoose.connect(connectionStr) 
        const newUser = new User(payload)
        await newUser.save() 
        return NextResponse.json({message: "Post success"}, {status: 200}) 
    } catch (error) {
        // console.log(error);
        
        return NextResponse.json({message: error.message}, {status: 500}) 
    }
}