'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animation'

export default function About() {
  return (
      <div className="container max-w-7xl mx-auto py-12">
        <motion.h1
            className="text-4xl font-bold mb-8 text-center"
            {...fadeInDown}
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.section
            className="mb-16"
            {...fadeInUp}
        >
          <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
            I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
            className="mb-16"
            {...fadeIn}
            transition={{ delay: 0.2 }}
        >
          <motion.h2
              className="section-title"
              {...fadeInUp}
          >
            Skills
          </motion.h2>
          <motion.div
              className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
          >
            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHover}
            >
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-secondary space-y-2">
                <li>HTML5 / CSS</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
              </ul>
            </motion.div>

            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHover}
            >
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="text-secondary space-y-2">
                <li>Next.js</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Mysql</li>
                <li>Sqlite</li>
              </ul>
            </motion.div>

            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHover}
            >
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
              <ul className="text-secondary space-y-2">
                <li>Git</li>
                <li>GitHub</li>

              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
            className="mb-16"
            {...fadeIn}
            transition={{ delay: 0.4 }}
        >
          <motion.h2
              className="section-title"
              {...fadeInUp}
          >
            Experience
          </motion.h2>
          <motion.div
              className="max-w-3xl mx-auto space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
          >
            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-primary mb-2">Sahab Company • 2024/2025</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Learning of multiple web application languages</li>
                <li>Performed in UI/UX with high focus on user experience</li>
              </ul>
            </motion.div>

            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">Call Director and Data Entry</h3>
              <p className="text-primary mb-2">DHL-Libya • 2022</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Call services for client&apos;s packages</li>
                <li>Checking, scanning documents and packages</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
            {...fadeIn}
            transition={{ delay: 0.6 }}
        >
          <motion.h2
              className="section-title"
              {...fadeInUp}
          >
            Education
          </motion.h2>
          <motion.div
              className="max-w-3xl mx-auto space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
          >
            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">French Baccallaureat</h3>
              <p className="text-primary mb-2">EAL • 2024</p>
              <p className="text-secondary">
                Graduated with honors. Focused on Business Management with IT and web development.
              </p>
            </motion.div>

            <motion.div
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">University Student</h3>
              <p className="text-primary mb-2">Universite Lumiere Lyon 2 • 2025 • (First Year)</p>
              <p className="text-secondary">
                First year in university, studying Business Management and IT.
              </p>
            </motion.div>

          </motion.div>
        </motion.section>
      </div>
  )
}