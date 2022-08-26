import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

type TitleContent = {
  text: string,
  className?: string,
}

const AnimatedSubTitle: FunctionComponent<TitleContent> = ({ text, className }) => {
  return (
    <motion.h2 
      className={`subtitle featured-title ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 2, delay: 0.3 }}
    >
      {text}
    </motion.h2>
  )
}

export default AnimatedSubTitle