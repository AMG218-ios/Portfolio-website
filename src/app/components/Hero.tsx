"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {  motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '@/utils/animation'


const Hero = () => {
  return (
    <section className='py-28 container nax-w7xl max-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <motion.div 
            {...scaleIn}
            transition={({delay: 0.2})}
            initial='hidden'
            className='flex flex-col items-center'>
                <Image src="/Abdelmoin-MG.avif" alt='profile image' width={100} height={100} className='rounded-full
                mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
            </motion.div>
          <motion.h1 
          {...fadeInUp}
          transition={({delay: 0.3})}
          className='text-3xl md:text-4xl font-bold mb-4'>Hi, I&apos;m <span className='text-primary'>Abdelmoin Almejrab Doc
          </span></motion.h1>

          <motion.p 
          {...fadeInUp}
          transition={({delay: 0.5})}
          className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Full Stack Developer | UI/UX 
          Enthusiast | Open Source Contributor</motion.p>

          <div className='flex justify-center space-x-4 mb-8'>
              <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition
              duration-300'>
              <FaGithub/>
              </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition
              duration-300'>
              <FaLinkedin/>
              </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition
              duration-300'>
              <FaTwitter/>
              </Link>

          </div>
          <div className='flex flex-col md:flex-row justify-center gap-4'>
              <Link
                  href="/projects"
                  className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                  View Projects
              </Link>

              <Link
                  href="/contact"
                  className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                  Contact Me
              </Link>
          </div>
        </div>  
    </section>
  )
}

export default Hero
