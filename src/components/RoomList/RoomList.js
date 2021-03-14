import React from 'react'
import Room from '../Room/Room'
import './RoomList.css'
const RoomList = ({rooms, onClick}) => {
    return (
        <div className="room_list">
            {
                rooms.map((room)=>(<Room key={room.id} room={room} onClick={onClick} />))
            }
        </div>
    )
}

export default RoomList
