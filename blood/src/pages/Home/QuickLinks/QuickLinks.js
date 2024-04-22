import "./QuickLinks.css";
import bloodbag from  "../../../assets/bloodbag.png"
import blooddrop from  "../../../assets/blooddrop.png"
import glass from  "../../../assets/glass.png"
import location from  "../../../assets/location.png"
import medicine from  "../../../assets/medicine.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const quickListsInfo = [
  { name: "Can I give Blood?", imgSrc: blooddrop,link:"/blood/eligibiltyQuiz"},
  { name: "Where to give Blood?", imgSrc: location,link:"/donate" },
  { name: "Iron deficiency", imgSrc: medicine ,link:"/iron-deficiency"},
  { name: "How to give Blood", imgSrc: bloodbag,link:"/making-your-donation" }
];

export default function QuickLinks() {
  return (
    <div className="quick-lists">
      {quickListsInfo.map((item) => (
        <Link to={item.link} key={item.name} className="item">
          <div className="item-img">
            <img src={item.imgSrc} alt="" />
          </div>
          <div className="item-name">
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
