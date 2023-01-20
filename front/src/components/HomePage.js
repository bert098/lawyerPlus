import React, { useState } from "react"
import axios from "axios";
import "../styles/homepage.css"
import heroimage from "../images/hero-banner.jpg"
import deal from "../images/deal.jpg"
import TextBox from "./plugins/TextBox"
import Card from "./plugins/Card"
import { FcMoneyTransfer } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import Button from "./plugins/Button"
import ContactUs from "./plugins/ContactUs";
import "../styles/mobile_css/mobilehomepage.css"

export default function (props) {
  return (
    <div>
      <div className="hero-banner">
        <TextBox text="Manage your clients your way"
        sub_text="From adding clients to recieving payments this is your one stop shop to managing your clients"/>
        <img src={heroimage}></img>
      </div>
      <div className="content">
      <div>
        <h1>Services we offer</h1>
      </div>
      <span className="cards">
        <Card icon={<FcMoneyTransfer />} title="Payments" text="Take one time payments or set up 
        a monthly charge for your customers"/>
         <Card icon={<FaHandsHelping />} title="Clients" text="Manage all your client data easily and in one place"/>
         <Card icon={<FcStatistics />} title="Analytics" text="View all your data and generate custom reports on the go"/>
      </span>
      <div className="split-content">
        <div className="text-content">
          <h2>Become your own boss</h2>
          <p>
            LawyerUp is a tool for lawyers that allows you to manage all your clients effectively 
            in one place, with LawyerUp a lawyer can add clients and collect payments without having to 
            go through tradtional means, a lawyer can also schedule meetings and see various reports on
            how your business is growing. Keep your business organized and try us today
          </p>
          <Button text="Get Started" link="/login"/>
        </div>
        <img src={deal}></img>
      </div>
      <div className="contact-us">
      <ContactUs/>
      </div>
      <div className="brand">
        <a>LawyerUp&nbsp;</a> your way!
      </div>
      </div>
    </div>
  )
}