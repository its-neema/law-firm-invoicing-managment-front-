import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import { motion } from "framer-motion";
import { UserContext } from '../components/hooks/UserContext';


function Login() {
   const[username,setUserName]=useState();
   const[password,setPassword]=useState();

   const user1 ={username,password};

   const navigate = useNavigate();
   const {user, setUser} = useContext(UserContext);

   const handleSubmit = e => {
      e.preventDefault();
      console.log(user)
      axios.post("http://localhost:8080/auth/login",user1).then((res)=>{
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
          <div className="relative">
         <div>
   
           
         <div className='p-20'>
          <body>
         <div className="wrapper">
            <div className="title-text">
            </div>
            <div className="form-container">
               <div className="form-inner">
                  <form action="#" className="login" onSubmit={handleSubmit}>
                  <div className="field">
                     <input type="text" value={username} placeholder="Email Address" required
                     onChange={(e)=> setUserName(e.target.value)}
                     />
                  </div>
                  <div className="field">
                     <input type="password" value={password} placeholder="Password" required
                     onChange={(e)=> setPassword(e.target.value)}
                     />
                  </div>
                     <div className="pass-link">
                     <Link to={"/Signup"}>
                        Forgot password?
                       </Link>
                     </div>
                     <div className="field btn">
                        <div className="btn-layer"></div>
                        <input type="submit" value="Login"/>
                     </div>
                     <div className="signup-link">
                       Not a member?<Link to={"/Signup"}>
                        Signup now
                       </Link>
                        
                     </div>
                  </form>
                  
               </div>
            </div>
         </div>
         
      </body>
       </div>
           </div>
         </div>
       </motion.div>
     )
}

export default Login