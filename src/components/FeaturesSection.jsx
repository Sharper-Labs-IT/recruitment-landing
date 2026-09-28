import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"

const features = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="7.5" stroke="#800000" strokeWidth="2"/>
        <path d="M17.5 17.5L23 23" stroke="#800000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 12h6M12 9v6" stroke="#800000" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    title: "Retail-focused sourcing",
    description:
      "Every candidate is matched to retail job families, from shop assistants and supervisors to store managers and fuel station staff. No generic CVs.",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#800000" strokeWidth="2"/>
        <path d="M9 14l3 3 7-6" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Vetted & interview-ready",
    description:
      "Background-checked, role-fit interviewed, and shortlisted before they reach you. Only genuine candidates. No fake profiles, no expired applications.",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4v10l5 3" stroke="#800000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="10" stroke="#800000" strokeWidth="2"/>
      </svg>
    ),
    title: "Fast placements",
    description:
      "48-hour average turnaround. Built for seasonal peaks, urgent gaps, and high-volume hiring, from corner shops to national retail chains.",
  },
  {
    number: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L17 9.5H24L18.5 13.5L20.5 20L14 16L7.5 20L9.5 13.5L4 9.5H11L14 3Z" stroke="#800000" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Affordable & transparent",
    description:
      "Clear pricing, flexible posting plans, and no hidden fees. Whether you're a local fuel station or a national chain, we have options to suit your budget.",
  },
]

const stats = [
  { value: "3,000+", label: "Live UK vacancies" },
  { value: "48h", label: "Avg. time to hire" },
  { value: "100%", label: "Verified employers" },
]

const FeaturesSection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      style={{
        background: "#fff",
        paddingTop: "96px",
        paddingBottom: "96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .feat-card {
          background: #faf9f7;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .feat-card:hover {
          border-color: rgba(128,0,0,0.22);
          box-shadow: 0 6px 28px rgba(128,0,0,0.08);
          transform: translateY(-3px);
        }
        .feat-number {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(128,0,0,0.35);
          font-family: 'Georgia', serif;
          margin-bottom: 20px;
        }
        .feat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(128,0,0,0.06);
          border: 1px solid rgba(128,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .feat-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px;
          line-height: 1.25;
          font-family: 'Georgia', 'Times New Roman', serif;
          letter-spacing: -0.01em;
        }
        .feat-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #666;
          margin: 0;
        }
        .stat-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 20px 32px;
          border-right: 1px solid rgba(0,0,0,0.09);
        }
        .stat-pill:last-child { border-right: none; }
        .partner-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #800000;
          color: #fff;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(128,0,0,0.28);
          text-decoration: none;
        }
        .partner-btn:hover {
          background: #6a0000;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(128,0,0,0.34);
        }
      `}</style>

      {/* Subtle background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-60px",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(128,0,0,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
        }}
      >
        {/* Section header */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          style={{ marginBottom: "56px", maxWidth: "600px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(128,0,0,0.06)",
              color: "#800000",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              border: "1px solid rgba(128,0,0,0.14)",
              marginBottom: "20px",
            }}
          >
            Why employers choose us
          </div>
          <motion.h2
            variants={textVariant(0.2)}
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: "0 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            Specialist retail recruitment,{" "}
            <span style={{ color: "#800000" }}>done right.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            From fuel stations to fashion chains, we connect UK employers with
            verified, job-ready candidates. Fast, affordable, and without the
            agency headaches.
          </motion.p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          variants={fadeIn("up", 0.45)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", 0.15 * (i + 1))}
              className="feat-card"
            >
              <div className="feat-number">{f.number}</div>
              <div className="feat-icon-wrap">{f.icon}</div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeIn("up", 0.55)}
          style={{
            background: "#faf9f7",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "16px",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            marginBottom: "52px",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="stat-pill" style={{ flex: "1 1 140px" }}>
              <span
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#800000",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#888",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", 0.65)}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#888",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Ready to find retail-ready candidates without the hassle?
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.retail-vacancies.uk/recruiters-signup"
            target="_blank"
            rel="noreferrer"
            className="partner-btn"
          >
            Become a Partner
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 7.5h11M9 3.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturesSection