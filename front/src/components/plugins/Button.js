import "../../styles/startbutton.css"

export default function Button(props) {
  return (
    <div>
      <button className="search-button">
        {props.text}
      </button>
    </div>
  )
}