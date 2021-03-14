import React from 'react'
import './Modal.css'
const Modal = ({text, visible, onClick}) => {
    const classVisible = visible ? "modal_visible":""

    const handleClick =()=>{
        onClick()
    }

    return (
        <div className={`modal ${classVisible}`}  onClick={handleClick}>
            <div className="modal_content">
                <h3>{text}</h3>
            </div>
        </div>
    )
}
export default Modal
