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

    // if(!message || typeof message!= "string"){
    //     return Response.json({
    //         status:400,
    //     })
    // }

    // const newMessage = {date:new Date().toISOString(),message}
    // const newdata = await userCollection.insertOne(newMessage);
    // return Response.json(newdata);


// // }


import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
 const usersCollection = await connect("users");

export async function GET() {
  try {
   
    const data = await usersCollection.find().toArray();
    return Response.json(data);
  } catch (err) {
    console.error("MongoDB Error:", err);
    return Response.json({ status: 500, message: "Server error" });
  }
}

export async function POST(request){
  const body = await request.json();
  const {name,message} = body;
  console.log("received message",body)
 
  if(!message || typeof message!= "string"){
        return Response.json({
            status:400,
        })
    }

    const newMessage = {date:new Date().toISOString(),name,message}
    const newdata = await usersCollection.insertOne(newMessage);
    revalidatePath("/users")
    return Response.json(newdata);

}
