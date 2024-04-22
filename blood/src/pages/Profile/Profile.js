import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { Link,useParams } from "react-router-dom";
import edit from "./edit.png";
import pro from "./profile.png";
import scoreImg from "./high-score.png"
import completed from "./accept.png"
import "./Profile.css";
import "../DonateBlood/Camp.css"
import { useDocument } from "../../hooks/useDocument";
import Avatar from "../../components/Avatar";
import { useState } from "react";

const campsData = []
export default function Profile() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  const {id}  = useParams();
  const { document, error } = useDocument("users",id);
  const [isData,setIsData] = useState(true)
  // const profileUrl = `/${document.uid}`;

  

  return (


      <div className="profile">

        <div className="profile-edit">
          <Link to="/edit">
            <img className="edit-img" src={edit} alt="" />
          </Link>
        </div>

        
        <div className="profile-image">
          {document && document.profileURL ? (
            <Avatar className="profile-img" src={document.profileURL} />
          ) : (
            <Avatar className="profile-img" src={pro} />
          )}
        </div>
        
        {document && <div className="profile-name">
        <span>{document.name}</span>
        </div>}


        <div className="stats">

          <div className="stat score">

            <div className="info">
              <p>Donation Score</p>
              <img src={scoreImg} alt="img" />
              <h1>45</h1>
            </div>

            

          </div>

          <div className="stat donations">


            <div className="info">
              <p>Total Donations</p>
              <img src={completed} alt="" />
              <h1>5</h1>
            </div>

          </div>

        </div>




        {user && <div className="blog">
          <Link to={`/profile/${user.uid}/blogs`}>My Blogs</Link>
        </div>}





        <div className="camp-table">
        {isData ? (
          <div className="no-data">
            <h3>No Donation Yet!!</h3>
            <span>Stay Healthy, Stay Happy</span>
          </div>
        ) : (
          campsData.length > 0 && (
            <div>
              <h3 className="camp-heading">Donation History</h3>
              <table className="camp-data-table">
                <thead>
                  <tr className="camp-title-row">
                    <th>Date</th>
                    <th>Location</th>
                    <th>District</th>
                    <th>Contact</th>
                    <th>Organizer</th>
                    <th>Coordinator</th>
                    <th>Registration Link</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {campsData.map((camp) => (
                    <tr key={camp.campID} className="camp-rows">
                      <td>{camp.date.substring(1, 11)}</td>
                      <td>{camp.location}</td>
                      <td>{camp.district}</td>
                      <td>{camp.contact}</td>
                      <td>{camp.organizer}</td>
                      <td>{camp.coordinator}</td>
                      <td>
                        <a
                          href={camp.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register as Voluntary Donor
                        </a>
                      </td>
                      <td>Time: {camp.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
      
        

        <div className="logout">
          {user && (
            <>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && <button className="btn" disabled>Logging out..</button>}
            </>
          )}
        </div>
      </div>
      
  );
}
