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
import { FiGithub } from "react-icons/fi";
import { getRooms } from "./data-access/rooms";


export default async function Home() {
  
  const rooms = await getRooms();

  const RoomCard = ({room}: {room: Room}) => {
    return (
      <Card>
  <CardHeader>
    <CardTitle>{room.name}</CardTitle>
    <CardDescription>{room.description}</CardDescription>
  </CardHeader>
  <CardContent>
    {room.githubRepo && 
    (<Button variant={'outline'}> <Link 
    className="flex gap-2 items-center" 
    href={room.githubRepo}
    target="_blank"
    rel="noopener noreferrer">
      <FiGithub/> GitHub Repo 
      </Link></Button> )}
  </CardContent>
  <CardFooter>
    <Button variant={'secondary'} asChild>
      <Link href={`/rooms/${room.id}`}>Join Room</Link>
      </Button>
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

      <div className="grid grid-cols-3">
      {rooms.map((room) => {
        return <RoomCard key={room.id} room={room} />
      })}
      </div>

    </main>
    
  );
}