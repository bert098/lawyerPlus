import React, { useState } from "react"
import axios from "axios";
import "../styles/homepage.css"
import heroimage from "../images/hero-banner.jpg"
import TextBox from "./plugins/TextBox"

export default function (props) {
  return (
    <div className="hero-banner">
      <TextBox text="Find the lawyer that's right for you"
      sub_text="Find a lawyer that fits your specific needs and is willing to help every step of the way"/>
      <img src={heroimage}></img>
    </div>
  )
}