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

// export async function POST(req){
    
//     const payload = await req.json() 
//     console.log(payload,"payload");
    
//     try {
//         await mongoose.connect(connectionStr) 
//         const Alreadyexists = User.findOne({email:payload.email})
//         if(!Alreadyexists){
//             const newUser = new User(payload)
//             await newUser.save() 
//             return NextResponse.json({message: "Post success"}, {status: 200})    
//         }
//         else {
//             return NextResponse.json({message: "user already exists"}, {status: 409})    

//         }
        
//     } catch (error) {
        
        
//         return NextResponse.json({message: error.message}, {status: 500}) 
//     }
// }
export async function POST(req) {
    const payload = await req.json();
    console.log(payload, "payload");

    try {
        await mongoose.connect(connectionStr);

        // Ensure to await the findOne call
        const alreadyExists = await User.findOne({ email: payload.email });
        if (!alreadyExists) {
            const newUser = new User(payload);
            await newUser.save();
            return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "This user already exists." }, { status: 409 });
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
