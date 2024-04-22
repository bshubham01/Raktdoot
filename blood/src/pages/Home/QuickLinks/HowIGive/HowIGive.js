import "./HowIGive.css";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import Tip from "./Tip"
const data = [
    {heading:"The day before",tips:["Have an iron-rich diet such as beans, spinach or meat, poultry.","Have a proper sleep of at least 8 hours.","Include more liquids in your diet"]},
    {heading:"On the Donation day",tips:["Do carry your identify identification forms e.g. driver’s license","Drink 2 cups of water before donating blood","Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation"]},
    {heading:"After the Donation",tips:["Reward yourself with a snack as refreshment immediately.","Drink more liquids over a period of 24 hours","Remove the bandage after few hours","Don’t do vigorous workout & give your body rest"]}
]
export default function HowIGive() {
  return (
    <div className="donate-blood">
      <h1>How do I donate?</h1>
      <div className="one">
        <img src={one} alt="" />
        <p>
          {" "}
          Check your eligibility. Sometimes people have to wait before they can
          donate so it’s best to double check.
        </p>
      </div>

      <div className="one">
        <img src={two} alt="" />
        <p>
          Find a donor centre. You can give life close to home, or near the
          office on your lunch break — it’s simple to find a centre that suits
          you.
        </p>
      </div>

      <div className="one">
        <img src={three} alt="" />
        <p>
          Book a donation. Get ready to start calling yourself a ‘life-saver’!
          Find a time and day that works for you and book it in.
        </p>
      </div>

      <hr />

      <div className="tips">
        <h1>Tips</h1>
        <p>
          Here are some tips to put your mind at ease during the blood donation
          process
        </p>
        <div className="card">

            < Tip data={data[0]}/>
            < Tip data={data[1]}/>
            < Tip data={data[2]}/>
        </div>
        
      </div>
    </div>
  );
}
