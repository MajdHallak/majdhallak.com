/* eslint-disable no-template-curly-in-string */

import MLogo from '../../assets/images/M-logo-title.png'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'j', 'd']
  const jobArray1 = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    ' ',
  ]
  const jobArray2 = [
    '& ',
    ' ',
    'W',
    'e',
    'b',
    // ' / ',
    // 'a',
    // 'p',
    // 'p',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  function setTime() {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    setTime()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> {/* 1.2s */}
            <br />
            <span className={`${letterClass} _13 span2`}>I</span>
            <span className={`${letterClass} _14 span1`}>t</span>
            <span className={`${letterClass} _15 span1`}>'s</span>
            <span className={`${letterClass} _15 span1`}> </span>
            <img className={`${letterClass} _16 m-logo`} src={MLogo} alt="M" />
            <AnimatedLetters
              /* imported */
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={19}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={21}
            />
          </h1>
          <ul>
            <li>
              <h2>
                Full Stack Developer / Express.js - PHP Laravel / React Native.
              </h2>
            </li>
            <li>
              <h2>Python for statistics / Backend Flask python</h2>
            </li>
          </ul>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default Home
