import "../../styles/cards.css"
import "../../styles/mobile_css/mobilecard.css"

export default function Card(props) {
  return (
    <span className="card">
      <div className="icon"> {props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </span>
  )
}