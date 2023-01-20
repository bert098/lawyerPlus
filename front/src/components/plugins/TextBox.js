import "../../styles/textBox.css"
import Button from "./Button"
import "../../styles/mobile_css/mobiletextbox.css"

export default function textBox(props) {
  return (
    <div className="hero-box">
      <h2 className="card-text">{props.text}</h2>
      <div className="sub-text">{props.sub_text}</div>
      <span>
        <Button text="Get Started" link="/login" />
      </span>
    </div>
  )
}