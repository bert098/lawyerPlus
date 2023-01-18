import "../../styles/cards.css"

import { FcMoneyTransfer } from "react-icons/fc";

export default function Card(props) {
  return (
    <span className="card">
      <div className="icon"> {props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </span>
  )
}