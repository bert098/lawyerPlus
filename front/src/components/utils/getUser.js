import axios from "axios";

async function getUser(token){
    let res = await axios.get("http://localhost:5000/user/token", {params:{
      token: token
    }})
    return res
}
export default getUser