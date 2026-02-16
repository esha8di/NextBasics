import { nanoid } from "@reduxjs/toolkit";
import { users } from "../userData";

export async function GET(request, { params }) {

    const { id } = await params;   
    const userId = Number(id);

    const userWithId = users.find(user => user.id === userId);

    if (!userWithId) {
        return Response.json(
            { message: "User not found" },
            { status: 404 }
        );
    }

    return Response.json(userWithId);
}





