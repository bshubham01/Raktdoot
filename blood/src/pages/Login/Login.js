import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { Link} from "react-router-dom"
import { toast } from 'react-hot-toast';
import "./Login.css"
const Login = () => {
  const {login, error} = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true)
  
    await login(email, password);
  
    // Check if there's no error 
    if (!error) {
      setIsPending(false)
    }
    setIsPending(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
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

    {!isPending && <button>Log in</button>}
    {isPending &&<button disabled>Logging in..</button>}
    <Link to='/signup' className="signup-btn">
      <button className="btn">Sign up</button>
    </Link>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login