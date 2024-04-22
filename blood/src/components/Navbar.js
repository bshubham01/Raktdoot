import { useState } from "react";
import { NavLink,Link,useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from 'react-hot-toast';
function Navbar() {
  const { user } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);
  // const {document} = useDocument("users",user.uid)

  const {id} = useParams();
  

 
  return (
    <div className="navbar">
      <nav>
        <h1 className="title">
          <Link to="/">RaKtDoot</Link>
        </h1>

        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink
              onClick={() => {
                setMenuOpen(false);
              }}
              className="n"
              exact
              to="/"
            >
              App
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                if(!user){
                  toast.dismiss();
                  toast.error("Please Login",{duration: 1000})
                }
              }}
              className="n"
              exact
              to="/donate"
            >
              DonateBlood
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMenuOpen(false);
                if(!user){
                  toast.dismiss();
                  toast.error("Please Login",{duration: 1000})
                }
              }}
              className="n"
              exact
              to="/availability"
            >
              Availability
              
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setMenuOpen(false);
                if(!user){
                  toast.dismiss();
                  toast.error("Please Login",{duration: 1000})
                
                }
              }}
              className="n"
              exact
              to="/host"
            >
              Host
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  className="n"
                  exact
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  className="n"
                  exact
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <NavLink
                className="n"
                to={`/profile/${user.uid}`}
                // to = "/profile"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
              Profile
              
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
