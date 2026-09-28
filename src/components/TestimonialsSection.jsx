import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    label: 'Hiring Manager',
    
    rating: 5,
    date: '2025-09-12',
    text: "Using Recruitment Landing cut our time-to-hire by 40%. The candidate quality and shortlist relevance are outstanding.",
  },
  {
    id: 2,
    name: "James Ortega",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    label: 'Candidate',
    
    rating: 5,
    date: '2026-01-05',
    text: "I found a role that matched my skills within days. The application process was clear and the hiring team was responsive.",
  },
  {
    id: 3,
    name: "Priya Patel",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    label: 'Recruiter',
    
    rating: 4,
    date: '2025-11-02',
    text: "The platform's sourcing tools and applicant tracking integrations helped us scale hiring while keeping candidate experience high.",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    label: 'Employer',
    
    rating: 5,
    date: '2026-03-18',
    text: "Reliable sourcing, intuitive dashboards, and great support. Recruitment Landing helped us quickly hire seasonal staff.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      {/* JSON-LD for Reviews / AggregateRating to improve SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Recruitment Landing",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: (
                testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
              ).toFixed(1),
              reviewCount: testimonials.length,
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: t.name,
              datePublished: t.date,
              reviewBody: t.text,
              name: `Review by ${t.name}`,
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
              },
            })),
          }),
        }}
      />
      <motion.div
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Real hiring results from employers and candidates
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          Trusted by hiring teams and job seekers for fast, high-quality recruitment. Reduce time to hire, improve candidate fit, and scale hiring with confidence.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="relative text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col overflow-hidden"
              >
                {/* Corner ribbon */}
                <div
                  className={`absolute z-20 text-white text-[11px] font-semibold text-center shadow ${
                    testimonial.label === 'Candidate' ? 'bg-[#0b69ff]' : 'bg-[#800000]'
                  }`}
                  style={{
                    width: '130px',
                    padding: '5px 0',
                    top: '18px',
                    left: '-32px',
                    transform: 'rotate(-45deg)',
                  }}
                >
                  {testimonial.label}
                </div>

                <motion.div
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4 mt-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.45 * (index + 1))}
                  className="flex justify-center"
                >
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
                      testimonial.label === 'Retail vacancies'
                        ? 'bg-[#fff7f7] text-[#c21515] border border-[#f9d6d6]'
                        : 'bg-[#f0f8ff] text-[#0b69ff] border border-[#dbeafe]'
                    }`}
                  >
                    {testimonial.label}
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-[#800000]"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3 text-[#800000]"
                >
                  {testimonial.name}
                </motion.h3>

                {/* location removed per request */}

                <motion.p
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#800000] hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#800000] hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;