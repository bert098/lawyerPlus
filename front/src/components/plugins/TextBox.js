import "../../styles/textBox.css"
import StartButton from "./StartButton"

export default function textBox(props) {
  return (
    <div className="hero-box">
      <h2 className="card-text">{props.text}</h2>
      <div className="sub-text">{props.sub_text}</div>
      <span>
        <StartButton/>
      </span>
    </div>
  )
}