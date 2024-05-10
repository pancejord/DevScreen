export default async function RoomPage(props: {params: {roomId: string}}) {

const roomId = props.params.roomId;

console.log(roomId)


    return <div>
        {roomId}

    </div>
}