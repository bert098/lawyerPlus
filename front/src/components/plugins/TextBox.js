import "../../styles/textBox.css"

export default function textBox(props) {
  return (
    <div className="hero-box">
      <div className="card-text">{props.text}</div>
      <div className="sub-text">{props.sub_text}</div>
      <span>
      <button className="search-button">
        Find A Lawyer
      </button>
      </span>
    </div>
  )
}