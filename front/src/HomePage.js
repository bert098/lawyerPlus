import React, { useState } from "react"
import axios from "axios";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const login = async (e) => {
    e.preventDefault()
    let email = document.getElementById("emailAddressSignIn").value
    let password = document.getElementById("passwordSignIn").value
    let x = await axios.get("http://localhost:5000/user/login", {params:{
      email: email,
      password: password
    }})
    console.log(x.data)
  }
  const signUp = async (e) => {
    e.preventDefault()
    let email = document.getElementById("emailAddressSignUp").value
    let password = document.getElementById("passwordSignUp").value
    let username = document.getElementById("username").value
    let x = await axios.post("http://localhost:5000/user", {
      email: email,
      username: username,
      password: password
    })
    console.log(x.data)
  }

  return (
    <div>
      Lawyer PLus 
    </div>
  )
}