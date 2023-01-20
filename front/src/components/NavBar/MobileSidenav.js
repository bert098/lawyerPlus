// In Sidenav.js
import { MobilenavData } from "./MobilenavData";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/mobilesidnav.css"
import { useState } from 'react';

export default function Sidenav() {
    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
    return (
        <div className={open ? "sidenav" : "sidenavClosed"}>
            <button className={open ? "menuBtnclose" : "menuBtn"} onClick={toggleOpen}>
            {open? <AiOutlineClose />: <AiOutlineMenu />}
            </button>
            {MobilenavData.map(item => {
                return <div className={open ? "linkText" : "linkTextClosed"}>{item.text}</div>
        
            })}
        </div>
    )
}