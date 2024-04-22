import { useState } from 'react'
import {useSignup} from '../../hooks/useSignup'
import thumbnail from "./profile.png" 
import { toast } from 'react-hot-toast'; 
import {bloodGroupPerson} from "../Data/Data"
import Select from 'react-select';

export default function Signup() {


  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState();
  const [dateOfBirth,setDateOfBirth] = useState('');
  const [bloodGroup,setBloodGroup] = useState('');
  const [password,setPassword] = useState('');
  const [address,setAddress] = useState('');
  const [isPending,setIsPending] = useState(false);
  const {signup,error} = useSignup();
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
  
    try {
      await signup(name, email, phone, dateOfBirth, bloodGroup, password, address);
  
      // Check if there's no error
      if (!error) {
        setIsPending(false);
      }
    } catch (error) {
      // Handle any errors from the signup function
      setIsPending(false);
      // Display the error using toast or any other error handling mechanism
    }
  };
  
  return (
    <form className="donate-blood" onSubmit={handleSubmit}>
      <h3>Signup</h3>
      
      <label>Full Name:</label>
      <input 
        required
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />

      <label>Phone:</label>
      <input 
        required
        type="tel" 
        pattern='[0-9]{10}'
        onChange={(e) => setPhone(e.target.value)} 
        value={phone} 
      />
      <label>Email ID:</label>
      <input 
        required
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        required
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <label>Date Of Birth:</label>
      <input 
        required
        type="date" 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        value={dateOfBirth} 
      />

      <label>Blood Group:</label>
      <Select 
        onChange={(option)=>{setBloodGroup(option)}}
        options={bloodGroupPerson}
        required
      />

      <label>Address:</label>
      <input 
        required
        type="text" 
        onChange={(e) => setAddress(e.target.value)} 
        value={address} 
      />

      {!isPending && <button>Sign up</button>}
      {isPending && <button disabled>Signing up</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
