import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

type TitleContent = {
  text: string,
  className?: string,
}

const AnimatedTitle: FunctionComponent<TitleContent> = ({ text, className }) => {
  return (
    <motion.h2 
      className={`title featured-title ${className}`}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 2 }}
    >
      {text}
    </motion.h2>
  )
}

export default AnimatedTitle