import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Select from "react-select";
import { states, Districts, bloodGroup, bloodComponent } from "../Data/Data";
import { useFirestore } from "../../hooks/useFirestore";
import {useAuthContext} from "../../hooks/useAuthContext"
import { useDocument } from '../../hooks/useDocument';


export default function Host() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Organization, setOrganization] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const {user} = useAuthContext();

  const history = useHistory();

  const {addDocument,response} = useFirestore('drives');
  const { document, error } = useDocument('users', user.uid);


  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();

    const driveData = {
      uid:user.uid,
      Fname,Lname,Organization,City,State,Phone,email,comment,
      blogId:Math.floor(Math.random() *1000),
      profileImg:document.profileURL

    }

    await addDocument(driveData)
    
    setFname("");
    setLname("");
    setOrganization("");
    setCity("");
    setState("");
    setPhone("");
    setEmail("");
    setComment("");
    setIsLoading(false)

    history.push("/host/success")
    
  };

  return (
    <form className="donate-blood" onSubmit={handleSubmit}>
      <h3>I would like information about hosting a blood drive!</h3>

      <label>
        <span>First Name:</span>
      <input
        type="text"
        onChange={(e) => setFname(e.target.value)}
        value={Fname}
        required
      />
      </label>

      <label>
        <span>Last Name :</span>
      <input
        type="text"
        onChange={(e) => setLname(e.target.value)}
        value={Lname}
        required
      />
      </label>

      <label>
        <span>Organization:</span>
      <input
        type="text"
        onChange={(e) => setOrganization(e.target.value)}
        value={Organization}
      />
      </label>

      <label>
        <span>City:</span>
      <input
        type="text"
        onChange={(e) => setCity(e.target.value)}
        value={City}
        required
      />
      </label>

      <label>
        <span>State:</span>
        <Select
          onChange={(option) => {
            setState(option);
          }}
          placeholder="Select State"
          options={states}
          required
        />
      </label>

      <label>
        <span>Phone:</span>
      <input
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={Phone}
        required
      />
      </label>

      <label>
        <span>Email:</span>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      </label>

      <label>
        <span>Comments:</span>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        required
      />
      </label>
      
    


      {!isLoading && <button>Submit</button>}
      {isLoading && <button disabled>Submitting</button>}
      
    </form>
  );
}
