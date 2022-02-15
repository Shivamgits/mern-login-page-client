import React,{useState} from 'react'
import "./Signup.css";
import { useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const loginUser = async(e) => {
    e.preventDefault();

    const res = await fetch("/signin",{
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
      
    });

    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials")
    }
    else{
      window.alert(" Login successful");
      console.log("Login successful");
      navigate('/')
 
    }


  }
  return (
    <>
       <div className="body-content">
  <div className="module">
    <h1>Login </h1>
    <form className="form"  method="POST"  autoComplete="off">
      <div className="alert alert-error"></div>
      
      <input type="email" placeholder="Email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} required />
     
      <input type="password" placeholder="Password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} required />
     
     
      <input type="submit" value="Log In" name="signin" className="btn btn-block btn-primary"
      onClick={loginUser} />
    </form>
  </div>
</div>
    </>
  )
}

export default Login