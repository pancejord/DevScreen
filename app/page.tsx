import { db } from "./db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Room } from "./db/schema";


export default async function Home() {
  
  const rooms = await db.query.room.findMany();

  const RoomCard = ({room}: {room: Room}) => {
    return (
      <Card>
  <CardHeader>
    <CardTitle>{room.name}</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    )
  }
  return (
    <main className=" min-h-screen p-16">
      <div className="flex items-center justify-between mb-12">
      <h1 className="text-4xl ml-10 font-semibold underline">Find Dev Rooms</h1>
      <Button className="mr-10" asChild><Link href="/create-room">Create Room</Link></Button>
      </div>

      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />
      })}

    </main>
    
  );
}