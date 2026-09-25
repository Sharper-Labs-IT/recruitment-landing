import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  { value: "3,000+", label: "Live UK vacancies" },
  { value: "48h", label: "Avg. time to hire" },
  { value: "100%", label: "Verified employers" },
];

const badges = ["Screened Candidates", "Fast Turnaround", "Payroll-Ready"];

/*
  Brand tokens — matched to Sharper Labs logo
  ────────────────────────────────────────────
  Logo maroon     : #7B0D1E   (nav button, logo mark)
  Panel fill      : #1C0508   (very deep maroon-black — richer than flat maroon)
  Panel midtone   : #5C0A18   (lighter maroon for inner glow/tint)
  Chevron stroke  : #C8860A   (gold — the existing outline, kept)
  Headline white  : #FAF6F0   (warm white, not sterile)
  Italic accent   : #C8860A   (gold italic serif — pairs with the logo's warm tones)
  CTA fill        : #7B0D1E   (matches nav button exactly)
  CTA hover       : #9C1025
  Body            : rgba(250,246,240,0.68)
  Badge border    : rgba(200,134,10,0.32)
  Stat value      : #FAF6F0
  Stat label      : rgba(250,246,240,0.40)
  Stat divider    : rgba(250,246,240,0.14)
*/

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#0D0204" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes heroPanDown {
          0%   { transform: translateY(0%);   }
          45%  { transform: translateY(-28%); }
          55%  { transform: translateY(-28%); }
          100% { transform: translateY(0%);   }
        }

        /* ── Eyebrow ── */
        .h-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(200,134,10,0.12);
          color: #C8860A;
          font-family: 'Inter', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          padding: 6px 14px 6px 10px;
          border-radius: 4px;
          border: 1px solid rgba(200,134,10,0.35);
        }
        .h-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C8860A;
          flex-shrink: 0;
        }

        /* ── Headline ── */
        .h-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.60rem, 1vw, 0.80rem);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(250,246,240,0.38);
          margin-bottom: 6px;
        }
        .h-title-main {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.3rem, 4.8vw, 3.9rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 0.95;
          color: #FAF6F0;
        }
        .h-title-accent {
          display: block;
          font-family: 'DM Serif Display', 'Georgia', serif;
          font-style: italic;
          font-size: clamp(2.5rem, 5.2vw, 4.2rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.02;
          color: #C8860A;
          margin-top: 3px;
        }

        /* ── Gold rule ── */
        .h-rule {
          width: 36px;
          height: 2px;
          background: #C8860A;
          border: none;
          border-radius: 2px;
          margin: 22px 0;
        }

        /* ── Body ── */
        .h-body {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(250,246,240,0.65);
          max-width: 400px;
          margin-bottom: 30px;
        }

        /* ── CTAs ── */
        .h-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #7B0D1E;
          color: #FAF6F0;
          padding: 14px 28px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: background 0.18s, transform 0.15s;
          border: 1px solid rgba(200,134,10,0.40);
        }
        .h-cta-primary:hover {
          background: #9C1025;
          transform: translateY(-1px);
        }
        .h-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: rgba(250,246,240,0.78);
          padding: 13px 24px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid rgba(250,246,240,0.22);
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .h-cta-secondary:hover {
          border-color: rgba(200,134,10,0.55);
          color: #C8860A;
          background: rgba(200,134,10,0.06);
        }

        /* ── Badges ── */
        .h-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(200,134,10,0.30);
          border-radius: 4px;
          padding: 5px 11px;
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          color: rgba(250,246,240,0.65);
          letter-spacing: 0.01em;
        }

        /* ── Stats ── */
        .h-stat-value {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.5rem, 2.6vw, 2.1rem);
          font-weight: 700;
          color: #FAF6F0;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 4px;
        }
        .h-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          color: rgba(250,246,240,0.40);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .h-stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(250,246,240,0.13);
          flex-shrink: 0;
        }

        /* ── Panel ── */
        .h-panel {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .h-panel svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* ── Video background ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <video
          src="/hero.mp4"
          aria-hidden
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          style={{
            width: "100%",
            height: "150%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            animation: "heroPanDown 20s ease-in-out infinite"
          }}
        />
        {/* Edge vignette on video side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(13,2,4,0.60) 0%, rgba(13,2,4,0.10) 36%, transparent 54%)",
          }}
        />
      </div>

      {/* ── SVG chevron: deep maroon fill + gold outline ── */}
      <div className="h-panel">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* Subtle inner lighter maroon to give depth to the panel */}
          <defs>
            <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#220409" />
              <stop offset="75%"  stopColor="#1C0508" />
              <stop offset="100%" stopColor="#160306" />
            </linearGradient>
          </defs>

          {/* Gold outline — slightly larger, offset right */}
          <path
            d="M 0,0 L 648,0 Q 688,0 736,88 L 822,450 L 736,812 Q 688,900 648,900 L 0,900 Z"
            fill="none"
            stroke="#C8860A"
            strokeWidth="5"
            opacity="0.65"
          />

          {/* Deep maroon fill panel */}
          <path
            d="M 0,0 L 628,0 Q 668,0 714,88 L 798,450 L 714,812 Q 668,900 628,900 L 0,900 Z"
            fill="url(#panelGrad)"
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full"
        style={{
          paddingLeft: "clamp(28px, 5.5vw, 88px)",
          paddingTop: "clamp(88px, 11vh, 148px)",
          paddingBottom: "clamp(88px, 11vh, 148px)",
          paddingRight: "clamp(28px, 4vw, 48px)",
        }}
      >
        <div style={{ maxWidth: "min(480px, 42vw)" }}>

          {/* Eyebrow */}
          

          {/* Headline — two-voice typographic split */}
          <motion.h1
            variants={textVariant(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ margin: 10 }}
          >
            
            <span className="h-title-main">UK Retail<br />Vacancies </span>
            <span className="h-title-accent">Hire Faster,<br />Hire Smarter.</span>
          </motion.h1>

          {/* Gold rule */}
          <motion.hr
            className="h-rule"
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />

          {/* Subheading */}
          <motion.p
            className="h-body"
            variants={fadeIn("up", 0.30)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Connecting UK retail employers with qualified, payroll-ready
            candidates from Sri Lanka. Retail-focused hiring, simplified.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeIn("up", 0.38)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "26px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.retail-vacancies.uk"
              target="_blank"
              rel="noreferrer"
              className="h-cta-primary"
            >
              Browse Vacancies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.retail-vacancies.uk/recruiters-signup"
              target="_blank"
              rel="noreferrer"
              className="h-cta-secondary"
            >
              Post a vacancy
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={fadeIn("up", 0.44)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "46px",
            }}
          >
            {badges.map((b) => (
              <span key={b} className="h-badge">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#C8860A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn("up", 0.50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="h-stat-divider" />}
                <div>
                  <div className="h-stat-value">{s.value}</div>
                  <div className="h-stat-label">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;