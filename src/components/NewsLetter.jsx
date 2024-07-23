// import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react'

function NewsLetter() {

    const[email, setEmail]=useState();

    const handleEmail = () =>{
        console.log("email", email)
    }

  return (
    <div className='om-scin'> <div className="pt-10 flex items-center justify-center content-center justify-items-center relative">
    <div className="sm:flex-col sm:py-10 bottom-14 h-full flex justify-evenly bg-white w-full p-24 rounded-xl  duration-700 ">
      <div>
        <h2 className="sm:text-2xl w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-black pl-8"
          >Sign up for our newsletter
        </h2>
        <p className= "sm:text-lg block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-black text-xl pl-8 "
          >Join our newsletter and get news in your inbox every week!
        </p>
      </div>
      <div className="flex-col flex lg:flex-row items-center justify-center content-center">
        <div className="pb-4 pt-4 w-64 text-white">
          <input
            name="email"
            type="email"c
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white p-2 w-full rounded-lg"
            label="Email"
          />
        </div>
        <div>
          <button onClick={handleEmail} ripple={true} className="ml-2 bg-blue-600 rounded-lg p-2 text-md  text-white">
            Get Started
            </button>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default NewsLetter