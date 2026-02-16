// import { connect } from "@/app/lib/dbConnect";
// import { users } from "./userData";
// const userCollection = connect("esha").find().toArray();

// export function GET(request) {
    
//     if(!userCollection){
//         return Response.json({
//             status:404,
//             message:"User not found"

//         })
//     }
//     return Response.json(userCollection)
// }

// // export async function POST(request){

// //     const {message} = await request.json();

// //     if(!message || typeof message!= "string"){
// //         return Response.json({
// //             status:400,
// //         })
// //     }

// //     const newMessage = {date:new Date().toISOString(),message}
// //     const newdata = await userCollection.insertOne(newMessage);
// //     return Response.json(newdata);


// // }

import { connect } from "@/app/lib/dbConnect";


export async function GET() {

    const moviesCollection = await connect("movies");

    const data = await moviesCollection.find().toArray();

    return Response.json(data);
}
