import React , {useEffect,useState} from 'react'
import './Contact.css'


const Contact = () => {
  
  const [ userData,setUserData] = useState({});
  const userContact = async() => {
    try {
      const res = await fetch("/getdata",{
        method: "GET",
        headers: {
         
          "Content-Type": "application/json"
        },
        
      })
      const data = await res.json();
      console.log(data);
      setUserData(data);
      console.log(userData);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
        
      }
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
  userContact();
  
  }, [])
 const handleInputs = (e) => {
   const name = e.target.name;
   const value = e.target.value;
   
 }

  return (
    <>



<main>
  <h3>Send me a message</h3>
 

  <form >
    <input type="text"  value={userData.name} onChange={handleInputs} id="fulname" placeholder="Full Name" autoComplete="off" required/>
    <input type="email"  value={userData.email} onChange={handleInputs} id="email" placeholder="Email" autoComplete="off" required/>
    <input type="text"   id="subject" placeholder="Subject" onChange={handleInputs} autoComplete="off" required/>
    <textarea name="message" id="message" value={userData.message} onChange={handleInputs} placeholder="Message" required></textarea>
    <button className="btn">Send</button>
  </form>
</main>


       
    </>
  )
}

export default Contact