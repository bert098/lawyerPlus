import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { GoDashboard } from "react-icons/go";
 
export const MobilenavData = [
    {
        id: 0,
        icon: <FaHome/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <FaQuestion/>,
        text: "About",
        link: "about"
    },
    {
        id: 2,
        icon: <BsTelephoneFill/>,
        text: "Contact Us",
        link: "contact-us"
    },
    {
        id: 3,
        icon: <FcSettings/>,
        text: "Account Settings",
        link: "settings"
    },
    {
        id: 4,
        icon: <GoDashboard/>,
        text: "Dashboard",
        link: "dashboard"
    }
]