import {Link} from 'react-router-dom'
import "./Operation.css";

const Operation = () => {
  return (
    <div id="feature">
      <div className="heading">
        <h2>Features</h2>
      </div>

    
      <div class="Operation">
        <Link to="/donate" style={{ textDecoration: 'none' }}>
        
          <div className="op op1">
            <h1>Donate Blood</h1>
          </div>
        </Link>


        <Link to="/host" style={{ textDecoration: 'none' }}>
          <div className="op op2">
            <h1>Host Drive</h1>
          </div>
        </Link>
        

        <Link to="/availability" style={{ textDecoration: 'none' }}>
          <div className="op op3">
            <h1>Availability</h1>
          </div>
        </Link>

        <Link to="/community" style={{textDecoration:"none"}}>
          <div className="op op4">
            <h1>Community</h1>
          </div>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Operation;
