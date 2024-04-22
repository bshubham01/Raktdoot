import "../Host/HostSuccess.css"
import success from "./check.png"

export default function Success() {
  return (
    <div className="success">

        <img className="success-img" src={success} alt="" />
        <h1 className="success-greeting">Thank You!</h1>
        <p className="success-mess">Thank you for your commitment for posting a blog! Your blog has been received, and our team will reveiw it!</p>
      
    </div>
  )
}
