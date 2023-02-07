import "../../styles/startbutton.css"
import { useFetcher, useNavigate } from "react-router-dom";

export default function Button(props) {
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
    const testList = [{
        name: 'Test 1',
        id: "1",
        description: "this customer I defeded for cheating",
        payments: [{
            amount: 100,
            reason: "defense",
            date: `${day}-${month}-${year}`
        },
        {
            amount: 300,
            reason: "defense",
            date: `${day}-${month}-${year}`
        }]

    },
    {
        name: 'Test 2',
        id: "2",
        description: "this customer I defended for beating Rob at smash",
        payments: [{
            amount: 1500,
            reason: "defense",
            date: `${day}-${month}-${year}`
        },
        {
            amount: 1060,
            reason: "defense",
            date: `${day}-${month}-${year}`
        }]

    }]
  return (
    <div>
    </div>
  )
}