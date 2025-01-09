import LogoTitle from '../../assets/images/logo-z.png';
import { Link } from 'react-router-dom';
import './index.scss';
import Resume from '../../assets/Zains_s_s_Resume.pdf'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
  faUnity,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {
    const [letterClass, setLetterClass] = useState(`text-animate`)
    const nameArray = ['a', 'i', 'n', ',']
    const jobArray = ['a', ' ', 'c','o','-','o','p', ' ', 'S','t','u','d','e','n','t','.']
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timer); // Proper cleanup to avoid errors
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className= "text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i!</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> 
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25} /> 
                </h1>
                <h2>Frontend Developer / Designer / Photographer</h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
                <a href={Resume} target="_blank" rel="noreferrer" className='flat-button-right'>RESUME</a>
                </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faUnity} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
        <Loader type = "pacman" />
        </>
    )
}

export default Home