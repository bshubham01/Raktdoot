import "./Info.css";
import { useState } from "react";
function Info() {
  const [describtion, setDescribtion] = useState(null);
  const [content1, setContent1] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [content2, setContent2] = useState(null);
  const [donateTo, setDonateTo] = useState(null);
  const [content3, setContent3] = useState(null);
  const [receive, setReceive] = useState(null);
  const [show0 ,setShow0] = useState(false);
  const [show1 ,setShow1] = useState(false);

  const [show2 ,setShow2] = useState(false);
  const [show3 ,setShow3] = useState(false);
  const [show4 ,setShow4] = useState(false);
  const [show5 ,setShow5] = useState(false);
  const [show6 ,setShow6] = useState(false);
  const [show7 ,setShow7] = useState(false);

  
  // const [describtion,setDescribtion] = useState(null);
  // const [describtion,setDescribtion] = useState(null);
  return (
    
    <div className="info">
      <h1 className="heading">CHOOSE YOUR BLOOD TYPE</h1>
      <p>And Know About Compatible Blood Type Donors</p>
      <ul className="blood-group">
      <li>
          <h1
          className={show0?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood, platelets, plasma");
              setContent1("% of Population with This Blood Type");
              setPercentage("38%");
              setContent2("You Can Give Blood To....");
              setDonateTo(" A+, B+, AB+, O+");
              setContent3("You Can Receive Blood From....");
              setReceive(" O+, O-");
              setShow0(!show0)
              setShow1(false);
              setShow2(false);
              setShow3(false);
              setShow4(false);
              setShow5(false);
              setShow6(false);
              setShow7(false);
            }}
          >
            O+
          </h1>
        </li>
        <li>
          <h1
          className={show1?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood, double red");
              setContent1("% of Population with This Blood Type");
              setPercentage("9%");
              setContent2("You Can Give Blood To....");
              setDonateTo("Everyone");
              setContent3("You Can Receive Blood From....");
              setReceive("O-");
              setShow0(false)
              setShow1(!show1);
              setShow2(false);
              setShow3(false);
              setShow4(false);
              setShow5(false);
              setShow6(false);
              setShow7(false);
            }}
          >
            O-
          </h1>
        </li>
        <li>
          <h1
          className={show2?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood, platelet");
              setContent1("% of Population with This Blood Type");
              setPercentage("30%");
              setContent2("You Can Give Blood To....");
              setDonateTo("A+,AB+");
              setContent3("You Can Receive Blood From....");
              setReceive("O+,O-,A+,A-");
              setShow0(false)
              setShow1(false)
              setShow2(!show2);
              setShow3(false)
              setShow4(false)
              setShow5(false)
              setShow6(false)
              setShow7(false)
              
            }}
          >
            A+
          </h1>
        </li>
        <li>
          <h1
          className={show3?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood,double red");
              setContent1("% of Population with This Blood Type");
              setPercentage("6%");
              setContent2("You Can Give Blood To....");
              setDonateTo("A+  ,A- , AB+,  AB-");
              setContent3("You Can Receive Blood From....");
              setReceive("O- , A-");
              setShow0(false)
              setShow1(false)
              setShow2(false)
              setShow3(!show3);
              setShow4(false)
              setShow5(false)
              setShow6(false)
              setShow7(false)
            }}
          >
            A-
          </h1>
        </li>
        <li>
          <h1
          className={show4?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood, platelet");
              setContent1("% of Population with This Blood Type");
              setPercentage("9%");
              setContent2("You Can Give Blood To....");
              setDonateTo("B+  ,AB+");
              setContent3("You Can Receive Blood From....");
              setReceive("O+ , O- , B+ , B-");
              setShow0(false)
              setShow1(false)
              setShow2(false)
              setShow3(false)
              setShow4(!show4);
              setShow5(false)
              setShow6(false)
              setShow7(false)
            }}
          >
            B+
          </h1>
        </li>
        <li>
          <h1
          className={show5?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- whole blood,double red");
              setContent1("% of Population with This Blood Type");
              setPercentage("2%");
              setContent2("You Can Give Blood To....");
              setDonateTo("B+ , B- , AB+ , AB-");
              setContent3("You Can Receive Blood From....");
              setReceive("O- , B-");
              setShow0(false)
              setShow1(false)
              setShow2(false)
              setShow3(false)
              setShow4(false)
              setShow5(!show5);
              setShow6(false)
              setShow7(false)
            }}
          >
            B-
          </h1>
        </li>
        <li>
          <h1
            className={show6?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- platelet,plasma");
              setContent1("% of Population with This Blood Type");
              setPercentage("4%");
              setContent2("You Can Give Blood To....");
              setDonateTo("AB+");
              setContent3("You Can Receive Blood From....");
              setReceive("All Types");
              setShow0(false)
              setShow1(false)
              setShow2(false)
              setShow3(false)
              setShow4(false)
              setShow5(false)
              setShow6(!show6);
              setShow7(false)
            }}
          >
            AB+
          </h1>
        </li>
        <li>
          <h1
            className={show7?"decorate":""}
            onClick={() => {
              setDescribtion("Best Donation Types:- platelet,plasma");
              setContent1("% of Population with This Blood Type");
              setPercentage("1%");
              setContent2("You Can Give Blood To....");
              setDonateTo("AB+ , AB-");
              setContent3("You Can Receive Blood From....");
              setReceive("O- , A- , B- , AB-");
              setShow0(false)
              setShow1(false)
              setShow2(false)
              setShow3(false)
              setShow4(false)
              setShow5(false)
              setShow6(false)
              setShow7(!show7);
            }}
          >
            AB-
          </h1>
        </li>
      </ul>

      

      { (show0 || show1 || show2|| show3|| show4|| show5|| show6|| show7) && (<div  className="trans">
          <h2>{describtion}</h2>
        <h4>{content1}</h4>
        <h1>{percentage}</h1>

        <h4>{content2}</h4>
        <h1>{donateTo}</h1>
        <h4>{content3}</h4>
        <h1>{receive}</h1>
      </div>
      )}

    </div>
  );
}

export default Info;
