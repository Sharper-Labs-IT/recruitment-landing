import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import retailVacancyLogo from '../assets/retail-vacacy-logo.png'

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div variants={textVariant(0.2)} initial="hidden" whileInView="show" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Sharper Labs connects UK retail employers with qualified candidates and provides local recruitment services through two dedicated sites.</p>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <img src={retailVacancyLogo} alt="Retail Vacancies" className="w-10 h-10 rounded object-contain" />
            <h3 className="text-xl font-semibold text-[#800000]">Retail-Vacancies.uk</h3>
          </div>
          <p className="text-gray-600 mb-4">A UK-focused job board listing retail roles across stores, supermarkets and retail chains — ideal for employers and candidates seeking retail opportunities.</p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>• Live job listings across the UK</li>
            <li>• Role-specific candidate sourcing</li>
            <li>• Fast application and screening flow</li>
          </ul>
          <a href="https://www.retail-vacancies.uk" target="_blank" rel="noreferrer" className="inline-block bg-[#800000] text-white px-5 py-2 rounded-full hover:bg-[#660000] transition-colors">Visit site</a>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <img src="https://www.job-labs.lk/favicon.ico" alt="Job Labs" className="w-10 h-10 rounded" />
            <h3 className="text-xl font-semibold text-[#800000]">Job-Labs.lk</h3>
          </div>
          <p className="text-gray-600 mb-4">A Sri Lanka based recruitment hub specialising in sourcing screened candidates for overseas placement, with experience in retail hiring for UK markets.</p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li>• Local sourcing & screening in Sri Lanka</li>
            <li>• Payroll-ready placements</li>
            <li>• Training and compliance support</li>
          </ul>
          <a href="https://www.job-labs.lk" target="_blank" rel="noreferrer" className="inline-block bg-[#800000] text-white px-5 py-2 rounded-full hover:bg-[#660000] transition-colors">Visit site</a>
        </div>
      </motion.div>
    </section>
  )
}

export default About
