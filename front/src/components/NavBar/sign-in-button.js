
import "../../styles/navbar.css"
import {useState, useLayoutEffect  } from 'react';
import axios from "axios";
import getUser from "../utils/getUser";
export default  function NavbarButton(props) {
  const [user,setUser]=useState(null)
  let getUserCall = null
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      props.setAuth(true)
    }
    getUserCall = async () =>{
    let res = await getUser(token)
    if(res.status === 200){
      setUser(res.data.user)
    } 
  }
  getUserCall()
}, []);
  if(props.auth && !user){
    if(getUserCall){
      getUserCall()
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