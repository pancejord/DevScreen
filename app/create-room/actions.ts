'use server'
import { getSession } from "@/lib/auth"
import { db } from "../db"

import { Room, room } from "../db/schema"

export async function createRoomActions(roomData: Omit<Room, "id" | "userId"> ) {
    const session = await getSession();
    console.log(session)

    if (!session) {
        throw new Error("You must be logged in to create this room")
    }
    await db.insert(room).values({...roomData, userId: session.user.id })

}