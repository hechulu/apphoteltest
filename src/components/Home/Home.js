import React , {useState} from 'react'
import RoomList from '../RoomList/RoomList'
import Modal from '../Modal/Modal'
import {rooms} from '../../data/data.json'
import './Home.css'
const Home = () => {

    const [visible,setVisible] = useState(false)
    const [text,setText] = useState("")

    const showModal = (text)=>{
        setVisible(true)
        setText(text)
    }

    const hideModal = ()=>{
        setVisible(false)
        setText("")
    }

    return (
        <div className="home_main">

            <RoomList  rooms={rooms.filter((r)=>(r.id<=10))} onClick={showModal} />
            <RoomList  rooms={rooms.filter((r)=>(r.id>10 && r.id % 2===0)).sort((a,b)=>(b.id-a.id))} onClick={showModal}/>
            <RoomList  rooms={rooms.filter((r)=>(r.id>10 && r.id % 2===1)).sort((a,b)=>(b.id-a.id))} onClick={showModal}/>
            <Modal text={text} visible={visible} onClick={hideModal} />
        </div>
    )
}

export default Home
