import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { Button, Input } from '@material-tailwind/react';
import image4  from '../assets/invoice.png'
import PopUpButton from './PopUpButton/PopUpButton'
import {dummyData, packages} from "./DataForPage/dummyData"
import {AiOutlinePoweroff} from 'react-icons/ai'
import {BsCheck2} from 'react-icons/bs'

function Home() {
 
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);


  const[email, setEmail]=useState();

  const handleEmail = () =>{
      console.log("email", email)
  }
  const failedPayment=()=>{
    alert("Daraja Api Is Experiencing technical issues, try later")
  }

  return (<motion.div
    className=""
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: "Tween", duration: 2 }}>
      <div className="pt-4 flex flex-col pl-4 h-full landing">
      <div className="flex lg:flex-row md:flex-row  sm:flex-col pt-20 lg:pt-40">
          <div className="">
          <p
            className="text-2xl text-blue-600 lg:text-4xl font-extrabold font-sans-serif no-underline align-middle tracking-wide normal-case leading-normal">
              <i>
                 AFRICA PARTNERS INVOICE MANAGEMENT SYSTEM
              </i>
         </p>
          <p className="sm:text-xl text-2xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark">
            Affordable,efficient, and easy to use legal practice management
          </p>
          
          <div className="flex flex-row pt-20">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white h-10 p-2"
            label="Email"
          />
           <div className="">
            <Link to="/clients">
          <button onClick={handleEmail} ripple={true} className="ml-2 bg-blue-600 rounded-lg p-2 text-md  text-white ">
            Get Started
            </button>
            </Link>
           
          </div>
        </div>
          </div>
          <div className="lg:w-1/2">
            <img src={image4} alt=".." className="rounded-lg landimage"/>
          </div>
         </div>
         <div>
           
        <PopUpButton handleScroll={handleScroll}></PopUpButton>
      </div>
      </div>
       
         {/* packages */}
        <div className='om-scin'>
            <h1 className='text-xl font-bold text-center'>Unlock All Advance Features</h1>
            <div className='flex flex-row justify-center '>
                <h1 className='text-lg'>Pay Annually $ Get</h1>
                <h1 className='text-gray-400 pr-2 pl-2 text-lg'>50% Discount</h1>
            </div>
            <div className='flex flex-row pt-5 lg:grid-flow-col gap-9 md:grid-flow-row md:gap-2'>
                <div>
                    <div className='flex flex-row'>
                        <BsCheck2 size={16} color="gray" />
                        <h6 className='text-xs'>No Credit Card Required</h6>
                    </div>
                    <div className='flex flex-row'>
                        <BsCheck2 size={16} color="gray" />
                        <h6 className='text-xs'>7-Days Free Trial</h6>
                    </div>
                    <div className='flex flex-row'>
                        <BsCheck2 size={16} color="gray" />
                        <h6 className='text-xs'>Dedicated customer support</h6>
                    </div>
                </div>
                {
                    packages.map((item, key)=>(
                        <div className='flex flex-row'>
                    <div key={item.id} className="hover:bg-gray-100 hover:rounded-lg p-1">
                        <h1 className='font-semibold text-xl'>{item.title}</h1>
                        <h3 className='text-gray-600 text-lg'>{item.data1}</h3>
                        <h3 className='text-gray-600 text-lg'>{item.data2}</h3>
                        <h3 className='text-gray-600 text-lg'>{item.data3}</h3>
                        <h3 className='text-gray-600 text-lg'>{item.data4}</h3>
                        <h1 className='pt-10 p-2 font-semibold text-xl'>{item.price}.</h1>
                        <Link>
                        <div onClick={failedPayment} className='border-2 border-gray-500 text-center '>
                            <h3>Choose Plan</h3>
                        </div>
                        </Link>
                        
                    </div>
                </div>
                    ))
                }
            </div>
            <div className='pt-4 border-blue-gray-300 border-b-2'>
               </div>
        </div>
    </motion.div>
  )
}

export default Home