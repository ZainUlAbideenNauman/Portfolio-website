import Loader from 'react-loaders'
// import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      
        return () => clearTimeout(timer) // Proper cleanup
      }, [])

    return(
        <>
            <div className='container-contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />

                    </h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact