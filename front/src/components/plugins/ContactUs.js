import "../../styles/contactus.css"
import "../../styles/mobile_css/mobilecontact-us.css"
import Button from "./Button"

export default function ContactUs(props) {
  return (
    <div className="contact-us-box">
      <h2 className="card-text">Have any questions about LawyerUp?</h2>
      <div className="sub-text">Send us any questions you have and one of our specilists will be happy to help you.</div>
      <Button text="Contact Us" link="/contact-us"/>
    </div>
  )
}