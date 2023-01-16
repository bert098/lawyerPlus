
import "../../styles/navbar.css"
import {useState, useLayoutEffect  } from 'react';
import axios from "axios";
export default  function NavbarButton(props) {
  const [user,setUser]=useState(null)
  let getUser = null
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      props.setAuth(true)
    }
  getUser = async () =>{
    let res = await axios.get("http://localhost:5000/user/token", {params:{
      token: token
    }})
    if(res.status === 200){
      setUser(res.data.user)
    } 
  }
  getUser()
}, []);
  if(props.auth && !user){
    if(getUser){
      getUser()
    }
    return (
      <div>
          Welcome
      </div>
  );
  }else if(props.auth && user){
    return (
      <div className="navigation-user">
          Welcome {user.username}
      </div>
  );
  }
    else{
      return(
        <button>
          sign in
        </button> 
      )
    }
  }