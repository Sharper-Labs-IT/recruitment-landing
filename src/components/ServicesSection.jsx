import React from 'react'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsStack className="w-7 h-7" />,
      title: "Candidate Sourcing",
      description: "Targeted sourcing for UK retail roles, including front of house, stock and supervisors.",
    },
    {
      icon: <HiLightBulb className="w-7 h-7" />,
      title: "Screening & Shortlisting",
      description: "CV screening, telephone interviews and role-fit shortlists.",
    },
    {
      icon: <FiSettings className="w-7 h-7" />,
      title: "Onboarding & Payroll",
      description: "Onboarding support and payroll-ready placements for overseas hires.",
    },
    {
      icon: <BiTime className="w-7 h-7" />,
      title: "Training & Upskilling",
      description: "Role-specific training to ensure quick ramp-up and retention.",
    }
  ]

  const points = ["Screened, role-fit candidates", "Fast turnaround and payroll-ready hires"]

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#fff7f7] to-white" />
      <div className="absolute -right-32 top-20 w-96 h-96 rounded-full bg-[#800000]/10 blur-3xl -z-10" />

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Header */}
        <motion.div variants={fadeIn('right', 0.3)} className="lg:w-5/12">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#800000]/10 text-[#800000] text-sm font-semibold tracking-wide uppercase">
            What we do
          </span>
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Retail Recruitment <span className="text-[#800000]">Services</span>
          </motion.h2>
          <p className="text-gray-600 text-lg mb-6">
            End-to-end hiring solutions for UK retail: sourcing, screening and onboarding from Sri Lanka.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#800000] text-white flex items-center justify-center shrink-0">
                  <FiCheck className="w-4 h-4" />
                </span>
                <span className="text-gray-700 font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.retail-vacancies.uk"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#800000] text-white px-8 py-4 rounded-full hover:bg-[#660000] transition-colors shadow-lg shadow-[#800000]/30 text-lg font-semibold"
          >
            Browse Retail Vacancies <FiArrowUpRight />
          </motion.a>
        </motion.div>

        {/* Services Grid */}
        <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn('up', 0.2 + 0.1 * index)}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#800000]/10 transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#800000] to-[#C8860A] group-hover:w-full transition-all duration-500" />
              <span className="absolute top-5 right-6 text-5xl font-bold text-gray-100 group-hover:text-[#800000]/10 transition-colors select-none">
                0{index + 1}
              </span>
              <div className="w-14 h-14 mb-5 rounded-xl bg-[#800000]/10 text-[#800000] flex items-center justify-center group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesSection
