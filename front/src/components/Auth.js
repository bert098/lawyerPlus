import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth (props) {
  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = async () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
    let inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; ++index) {
        inputs[index].value = ""
    }
  }
  const login = async (e) => {
    e.preventDefault()
    let email = document.getElementById("emailAddressSignIn").value
    let password = document.getElementById("passwordSignIn").value
    let res = await axios.get("http://localhost:5000/user/login", {params:{
      email: email,
      password: password
    }})
    if(res.status === 200){
      localStorage.setItem('token', res.data.token)
      props.setAuth(true);
      navigate("/");
    }
    
  }
  const signUp = async (e) => {
    e.preventDefault()
    let email = document.getElementById("emailAddressSignUp").value
    let password = document.getElementById("passwordSignUp").value
    let username = document.getElementById("username").value
    await axios.post("http://localhost:5000/user", {
      email: email,
      username: username,
      password: password
    })
    await changeAuthMode();
  }


  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                id="emailAddressSignIn"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                id="passwordSignIn"
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button onClick={login} className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              id="username"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="emailAddressSignUp"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id="passwordSignUp"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  onClick={signUp} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}