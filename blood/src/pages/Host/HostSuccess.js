import "./HostSuccess.css"
import success from "./check.png"
export default function HostSuccess() {
  return (
    <div className="success">

        <img className="success-img" src={success} alt="" />
        <h1 className="success-greeting">Thank You!</h1>
        <p className="success-mess">Thank you for your commitment to hosting a blood donation drive with us! Your form has been received, and our team will be in touch soon. Let's work together to make a positive impact!</p>
      
    </div>
  )
}
