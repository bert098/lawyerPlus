import "../../styles/startbutton.css"
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();
  let controller = null
  if(props.link){
    controller = () => {
      navigate(props.link);
    } 
  }else{
    controller = props.controller
  }
  return (
    <div>
      <button className="search-button" onClick={controller}>
        {props.text}
      </button>
    </div>
  )
}