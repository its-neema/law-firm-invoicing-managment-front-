import React from 'react'
import { motion } from "framer-motion";


function Features() {
  return (
    <motion.div
          className="pt-4 flex flex-col pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "Tween", duration: 2 }}>
      hello
    </motion.div>
    
  )
}

export default  Features;