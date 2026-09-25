import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowUpRight } from 'react-icons/fi'
import { fadeIn, textVariant } from '../utils/motion'

const sites = [
  {
    name: "Retail-Vacancies.uk",
    tag: "UK Job Board",
    url: "https://www.retail-vacancies.uk",
    logo: "https://www.retail-vacancies.uk/favicon.ico",
    description: "A UK-focused job board listing retail roles across stores, supermarkets and retail chains. Ideal for employers and candidates seeking retail opportunities.",
    points: ["Live job listings across the UK", "Role-specific candidate sourcing", "Fast application and screening flow"],
  },
  {
    name: "Job-Labs.lk",
    tag: "Sri Lanka Recruitment Hub",
    url: "https://www.job-labs.lk",
    logo: "https://www.job-labs.lk/favicon.ico",
    description: "A Sri Lanka based recruitment hub specialising in sourcing screened candidates for overseas placement, with experience in retail hiring for UK markets.",
    points: ["Local sourcing & screening in Sri Lanka", "Payroll-ready placements", "Training and compliance support"],
  },
]

const About = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div variants={textVariant(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#800000]/10 text-[#800000] text-sm font-semibold tracking-wide uppercase">
          Who we are
        </span>
        <h2 className="text-3xl md:text-5xl font-bold">About <span className="text-[#800000]">Us</span></h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">Sharper Labs connects UK retail employers with qualified candidates and provides local recruitment services through two dedicated sites.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sites.map((site, i) => (
          <motion.div
            key={site.name}
            variants={fadeIn(i === 0 ? 'right' : 'left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-[#800000]/10 transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#800000]/5 group-hover:bg-[#800000]/10 transition-colors" />
            <div className="relative flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#800000]/10 flex items-center justify-center">
                <img src={site.logo} alt={site.name} className="w-8 h-8 rounded" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#800000]">{site.name}</h3>
                <span className="text-sm font-medium text-gray-500">{site.tag}</span>
              </div>
            </div>
            <p className="relative text-gray-600 leading-relaxed mb-6">{site.description}</p>
            <ul className="relative space-y-3 mb-8">
              {site.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-gray-700">
                  <FiCheckCircle className="w-5 h-5 text-[#800000] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="relative mt-auto self-start inline-flex items-center gap-2 bg-[#800000] text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-[#800000]/25 hover:bg-[#660000] transition-colors"
            >
              Visit site <FiArrowUpRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
