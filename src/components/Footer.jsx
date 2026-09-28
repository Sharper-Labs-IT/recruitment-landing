import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import retailVacancyLogo from '../assets/retail-vacacy-logo.png'

const Footer = () => {
  // simplified footer — link lists removed per design

  return (
    <motion.footer 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div 
          variants={fadeIn('up', 0.3)}
          className="flex flex-col items-center text-center gap-6 py-8"
        >
          <motion.div variants={fadeIn('down', 0.5)} className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#800000] rounded-full opacity-90"></div>
            <span className="text-2xl font-semibold text-[#800000]">Sharper Labs Recruitment</span>
          </motion.div>

          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-700 max-w-2xl">
            Connecting UK retail employers with qualified candidates from Sri Lanka — recruitment simplified.
          </motion.p>

          <motion.div variants={fadeIn('up', 0.7)} className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <motion.a whileHover={{ scale: 1.05 }} href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#f3f3f3] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#f3f3f3] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#f3f3f3] rounded-full flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <motion.a whileHover={{ scale: 1.02 }} href="https://www.retail-vacancies.uk" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#800000] font-medium">
                <img src={retailVacancyLogo} alt="Retail Vacancies" className="w-5 h-5 rounded object-contain" />
                Retail Vacancies
              </motion.a>
              <motion.a whileHover={{ scale: 1.02 }} href="https://www.job-labs.lk" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#800000] font-medium">
                <img src="https://www.job-labs.lk/favicon.ico" alt="Job Labs" className="w-5 h-5 rounded" />
                Job Labs
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div 
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <motion.p 
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} Sharper Labs. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
