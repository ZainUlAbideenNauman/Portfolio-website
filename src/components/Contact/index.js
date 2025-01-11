import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      
        return () => clearTimeout(timer) // Proper cleanup
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_90qsdum',
            'template_gviur2p',
            refForm.current,
            'iDbMnFqIRbk7UpDyo'
        )
        .then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
      }

    return(
        <>
            <div className='container-contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />

                    </h1>
                    <p>
                        I am always interested to work on something new, whether its creative projects like covering an event or technical work like working on a website! Please use the contact form below to reach out to me.
                    </p>
                    <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
  <ul>
    <li className="half">
      <input type="text" name="from_name" placeholder="Name" required />
    </li>
    <li className="half">
      <input type="email" name="reply_to" placeholder="Email" required />
    </li>
    <li>
      <input type="text" name="subject" placeholder="Subject" required />
    </li>
    <li>
      <textarea name="message" placeholder="Message" required></textarea>
    </li>
    <li>
      <input type="submit" className="flat-button" value="SEND" />
    </li>
  </ul>
</form>


                    </div>
                </div>
                <div className='info-map'>
                  Zain Ul Abideen
                  <br />
                  Halifax, Canada
                  <br/>
                  6385 South St, Halifax, NS B3H 4J4 <br />
                  <span>Zain.Abideen@dal.ca</span>
                </div>
                <div className='map-wrap'>
                  <MapContainer center={[44.6347525,-63.5970667]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.6347525,-63.5970667]}>
                      <Popup>I live here! Come over for a cup of tea :D</Popup>
                    </Marker>

                  </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact