import { CreateRoomForm } from "./create-room-form";

export default function CreateRoomPage() {
    return (
        <div className="md:mx-auto mx-10 max-w-4xl mt-10 pb-24">
            <h1 className="text-4xl font-bold flex items-center justify-center py-5 ">Create Room</h1>
 

            <CreateRoomForm/>
        </div>
    )
}