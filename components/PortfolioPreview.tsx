import { NextComponentType } from 'next'
import React from 'react'
import PortfolioCard from './PortfolioCard'
import AnimatedSubTitle from './AnimatedSubTitle'


const PortfolioPreview: NextComponentType = () => {
  const projects = [
    {
      id: 1,
      slug: '/portafolio/contalink',
      title: 'Contalink',
      description: 'Contalink es una empresa que ayuda a lxs contadorxs a hacer sus tareas de una manera más sencilla y eficaz, gestionando la contaduría de más de 25,000 empresas.',
      imageUrl: 'https://source.unsplash.com/random/1280x720?random=1',
      icons: {
        js: true,
        angular: true,
        tailwind:true
      }
    },
    {
      id: 2,
      slug: '/portafolio/los-cabos-children',
      title: 'Los Cabos Children Foundation',
      description: 'LCCF es una empresa sin ánimo de lucro que reune donativos para ayudar a lxs niñxs de Baja California a mejorar su calidad de vida.',
      imageUrl: 'https://source.unsplash.com/random/1280x720?random=2',
      icons: {
        js: true,
        react: true,
        craeteReactApp: true,
        bootstrap: true
      }
    },
    {
      id: 3,
      slug: '/portafolio/oleolab',
      title: 'Oleolab',
      description: 'Oleolab es una empresa productora y distribuidora de aceites naturales, líder en méxico con presencia en las cadenas más importantes del país.',
      imageUrl: 'https://source.unsplash.com/random/1280x720?random=3',
      icons: {
        js: true,
        react: true,
        next: true,
        tailwind:true
      }
    },
    {
      id: 4,
      slug: '/portafolio/hasta-la-luna-studios',
      title: 'Hasta la Luna Studios',
      description: 'HLLS es una agencia de contenido audiovisual, con más de 2 años de experiencia en la producción de videoclips, spots publicitarios, contenido para redes sociales, etc.',
      imageUrl: 'https://source.unsplash.com/random/1280x720?random=4',
      icons: {
        js: true,
        react: true,
        next: true,
        tailwind:true
      }
    },
  ]

  return (
    <div className="main-container">
      <AnimatedSubTitle text='Portafolio' />

      <div className="grid grid-cols-1 gap-8">
        {projects && projects.map(project => (
          <PortfolioCard 
            key={project.id}
            slug={project.slug}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioPreview