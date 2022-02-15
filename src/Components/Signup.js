import React , {useState} from "react";
import { useNavigate} from "react-router-dom"



import "./Signup.css";


const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:"",
  })

  let name,value;
  const handleInput = (e) =>{
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }

  const PostData = async(e) => {
    e.preventDefault();
    const {name,email,phone,work,password,cpassword} = user;
    const res = await fetch("/register",{
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
      
    });

    const data = await res.json();
   if(res.status === 422 || !data){
     window.alert("Invalid Registration");
     console.log("Invalid Registration")
   }
   else{
     window.alert(" Registration successful");
     console.log("Registration successful");
     navigate('/login')

   }

  }
  return (
    <>
     <div className="body-content">
  <div className="module">
    <h1>Create an account</h1>
    <form className="form"  method="POST"  autoComplete="off">
      <div className="alert alert-error"></div>
      <input type="text" placeholder="User Name" name="name" autoComplete="off" value={user.name} onChange={handleInput} required />
      <input type="email" placeholder="Email" name="email" autoComplete="off" value={user.email} onChange={handleInput} required />
      <input type="text" placeholder="Phone" name="phone" autoComplete="off" value={user.phone} onChange={handleInput} required />
      <input type="text" placeholder="Your Profession" name="work" autoComplete="off" value={user.work} onChange={handleInput} required />
      <input type="password" placeholder="Password" name="password"  autoComplete="off" value={user.password} onChange={handleInput} required />
      <input type="password" placeholder="Confirm Password" name="cpassword"  autoComplete="off" value={user.cpassword} onChange={handleInput} required />
     
      <input type="submit" value="register" name="signup" className="btn btn-block btn-primary" onClick={PostData} />
    </form>
  </div>
</div>
    </>
  );
};

export default Signup;
