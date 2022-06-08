import { getDefaultNormalizer } from '@testing-library/react';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email ==="merve@gmail.com" && password === "12345"){
      navigate("/home");
      console.log("true");
    }
    else{
      navigate("/");
      console.log("false");
    }   
  }
 
  return (
    <div className="d-flex justify-content-center">
    {window.innerWidth > 700 && (
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
    )}
    <div className="register-form">
      <h1 className="form-title display-3">Login</h1>
      <br/>
      <form id="register" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email adress.."
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password.."
            onChange={(e)=>setPassword(e.target.value)}        
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="Login"          
        />
      </form>
      
    </div>
  </div>
  )
}

export default Login