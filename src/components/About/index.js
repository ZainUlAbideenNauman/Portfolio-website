import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timer) // Proper cleanup
  }, [])
  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            I am an Applied Computer Science Major in Dalhousie University hoping to find my first
            co-op placement Summer 2025.
          </p>
          <p align="LEFT">
            I am quite confident, always finding solutions to problems and constantly working on 
            my technical skills one project at a time
          </p>
          <p>
            How I identify: International student, 
            Problem-solver, photography enthusiast and obsessed with technology!
          </p>
        </div>
        <div className="text-zone2">
        <p align="right">
            I also run a personal photography account! I have been doing photography for as long as I can remember
            and I bought a DSLR in April 2024 (Canon EOS Rebel T7i!)
          </p>
          <p align="right">
            Follow my Instagram account here!
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/zaindoesphotography/'>
            <FontAwesomeIcon className='instagram-icon' icon={faInstagram} color= '#000000' />
          

            </a>
          </p>

        </div>

        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
