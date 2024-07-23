import React, { useState } from "react";
import { motion } from "framer-motion";
// import { Tooltip } from "@material-tailwind/react";

const Support = ({ open, setOpen }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
    setOpen(false);
  };
  return (
    <div>
      <motion.div
        className="bg-white justify-items-center om-scin  flex rounded-2xl"
        initial={{ scale: 1, opacity: 0, height: 0, width: 0 }}
        animate={{
          x: open ? -30 : 0,
          y: open ? -30 : 0,
          width: open && "300px",
          height: open && "375px",
          opacity: 1,
        }}
        transition={{ type: "spring", duration: 2, ease: "easeInOut" }}
      >
        <motion.div
          className="pt-4 flex flex-col pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Tween", duration: 2 }}
        >
          <h5 className="cursor-pointer text-4xl text-blue-500 font-inter font-medium tracking-tight pt-4">
            Hello There 🖐🏻
          </h5>
          
          <span className="text-md text-blue-500 font-inter font-medium tracking-tight pt-4">
            Ask us anything.
          </span>
          <div className="pt-8">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                className="outline-none border-none text-black"
                placeholder="Send us a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </form>
          </div>
        
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support;
