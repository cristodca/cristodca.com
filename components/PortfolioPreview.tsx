import { NextComponentType } from 'next'
import React from 'react'
import AnimatedSubTitle from './AnimatedSubTitle'
import PortfolioCard from './PortfolioCard'


const PortfolioPreview: NextComponentType = () => {
  return (
    <div className="main-container">
      <AnimatedSubTitle text='Portafolio' />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </div>
  )
}

export default PortfolioPreview