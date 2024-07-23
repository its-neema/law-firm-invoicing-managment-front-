import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { motion } from "framer-motion";
import { UserContext } from '../components/hooks/UserContext';

function Signup() {
   const[firstName,setFirstname]=useState();
   const[lastName,setLastname]=useState();
   const[billingAddress,setBillingAddress]=useState();
   const[username,setUserName]=useState();
   const[password,setPassword]=useState();
   const[phoneNumber,setPhoneNumber]=useState();
   const[dateOfBirth,setDateOfbirth]=useState();
   const[noOfEmployees,setNoOfEmployees]=useState();

   const user1 ={firstName,lastName,billingAddress,username,password,phoneNumber,dateOfBirth,noOfEmployees}
const navigate= useNavigate();
const {user, setUser} = useContext(UserContext);

  const  handleSubmit = e => {
      e.preventDefault();
      console.log(user)
      
      axios.post("http://localhost:8080/auth/signup/client",user1).then((res)=>{
         setUser(res.data.data)
           navigate('/clients')
     }
      ).catch(err =>{
            console.log(err)
         });
      }
   return (
      <motion.div
      className="pt-4 flex flex-col pl-4 justify-items-center items-center content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "Tween", duration: 2 }}
    >
      <div className=''>
    <div className='p-20'>
       <body>
      <div className="wrapper">
         <div>
            
         </div>
         <div className="form-container">
             <div className="form-inner">
               <form action="#" className="signup" onSubmit={handleSubmit}>
               <div className="field">
                     <input type="text" placeholder="First Name" required
                     value={firstName}
                     onChange={(e)=> setFirstname(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="text" value={lastName} placeholder="Last Name" required
                     onChange={(e)=> setLastname(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="text" value={phoneNumber} placeholder="Phone Number" required
                     onChange={(e)=> setPhoneNumber(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="date" value={dateOfBirth} placeholder="Date Of Birth(2024-03-08)" required
                     onChange={(e)=> setDateOfbirth(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="text" value={noOfEmployees} placeholder="No Of Empleyees" required
                     onChange={(e)=> setNoOfEmployees(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="text" value={billingAddress} placeholder="Billing address" required
                     onChange={(e)=> setBillingAddress(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="text" value={username} placeholder="Email Address" required
                     onChange={(e)=> setUserName}
                     />
                  </div>
                  <div className="field">
                     <input type="password" value={password} placeholder="Password" required
                     onChange={(e)=> setPassword(e.target.value)}
                     />
                  </div>
                  <div className="field btn" >
                     <div className="btn-layer"></div>
                     <input type="submit" value="Sign Up"/>
                  </div>
                  <div className="signup-link">
                     Already a member?<Link to={"/login"}>
                     Login
                    </Link>
                    
                  </div>
               </form>
               
            </div>
         </div>
      </div>
      
   </body>
    </div>
    
    </div>
    </motion.div>
  )
}

export default Signup
