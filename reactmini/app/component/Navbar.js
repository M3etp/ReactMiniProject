import React from 'react'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';

const defaultAnimations = {
    visible: {
        opacity:1,
    },
    hidden:{
        opacity:0,
    }
}
export default function 
({heading, created}) {
  return (
    <motion.div 
    className="h-[70px] bg-[#6798d3] flex items-center px-[30px] justify-between">
        <motion.span aria-hidden className='text-black font-bold text-3xl font-mono'
        initial='hidden'
        animate='visible'
        transition={{staggerChildren: 0.1}}>
            {heading.split('').map((char)=>(
                <motion.span key={uuidv4()} variants={defaultAnimations} transition={{duration: 0.1}}>{char}</motion.span>
            ))}
        </motion.span>
        <motion.span aria-hidden className='text-black font-medium text-xl font-sans'
        initial='hidden'
        animate='visible'
        transition={{staggerChildren: 0.1, delayChildren: 1.9}}>
            {created.split('').map((char)=>(
                <motion.span key={uuidv4()} variants={defaultAnimations} transition={{duration:0.1}}>{char}</motion.span>
            ))}
        </motion.span>
    </motion.div>
  )
}
