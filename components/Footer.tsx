import { NextComponentType } from 'next'
import React, { useEffect } from 'react'
import { checkDarkMode, toggleDarkMode } from './../helpers/darkMode.js'

const Footer: NextComponentType = () => {
  useEffect(() => {
    checkDarkMode()
  }) 

  return (
    <footer className='py-4'>
      <div className="flex justify-center text-dark dark:text-light">
        Hecho con ♥️ por @cristodca
      </div>
    </footer>
  )
}

export default Footer;