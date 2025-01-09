// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
// import LogoZ from '../../../assets/images/logo-z.png'
// import './index.scss'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       })

//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 4,
//         duration: 4,
//       }
//     )
//   }, [])

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img
//         className="solid-logo"
//         ref={solidLogoRef}
//         src={LogoZ}
//         alt="Z Logo"
//       />

//       <svg
//         width="559pt"
//         height="897pt"
//         version="1.0"
//         viewBox="0 0 559 897"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g
//           className="svg-container"
//           transform="translate(0 457) scale(.1 -.1)"
//           fill="none"
//         >
//           <path
//             ref={outlineLogoRef}
//             d="YOUR_NEW_SVG_PATH_FOR_Z"
//           />
//         </g>
//       </svg>
//     </div>
//   )
// }

// export default Logo
