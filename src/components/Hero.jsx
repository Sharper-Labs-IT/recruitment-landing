import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const stats = [
  { value: "3,000+", label: "Live UK vacancies" },
  { value: "48h", label: "Avg. time to hire" },
  { value: "100%", label: "Verified employers" },
];

const badges = ["Screened Candidates", "Fast Turnaround", "Payroll-Ready"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#0d0d0d" }}
    >
      <style>{`
        @keyframes heroPanDown {
          0%   { transform: translateY(0%);   }
          45%  { transform: translateY(-28%); }
          55%  { transform: translateY(-28%); }
          100% { transform: translateY(0%);   }
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.10);
          color: #ffb3ab;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(6px);
        }
        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #800000;
          color: #fff;
          padding: 15px 30px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(128,0,0,0.45);
        }
        .hero-cta-primary:hover {
          background: #9c0000;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(128,0,0,0.5);
        }
        .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          color: #f1f1f1;
          padding: 14px 26px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.28);
          transition: border-color 0.2s, background 0.2s;
          backdrop-filter: blur(6px);
        }
        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.45);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 5px 13px;
          font-size: 12px;
          color: #eee;
          font-weight: 500;
          backdrop-filter: blur(6px);
        }
        .hero-stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255,255,255,0.20);
          flex-shrink: 0;
        }
      `}</style>

      {/* ── Full-bleed video background ── */}
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
          src={`${import.meta.env.BASE_URL}hero.mp4`}
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
            objectPosition: "top",
            display: "block",
            animation: "heroPanDown 20s ease-in-out infinite",
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.78) 38%, rgba(8,8,8,0.45) 68%, rgba(8,8,8,0.25) 100%), " +
              "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.15) 22%, rgba(8,8,8,0.15) 78%, rgba(8,8,8,0.65) 100%)",
          }}
        />
      </div>

      {/* ── Background accents ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {/* Soft radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(128,0,0,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid bottom-left */}
        <svg
          aria-hidden
          style={{
            position: "absolute",
            bottom: "56px",
            left: "56px",
            opacity: 0.22,
          }}
          width="108"
          height="108"
          viewBox="0 0 108 108"
        >
          {[0, 18, 36, 54, 72, 90].map((x) =>
            [0, 18, 36, 54, 72, 90].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="#fff" />
            )),
          )}
        </svg>
      </div>

      {/* ── Left: main content ── */}
      <div
        className="relative z-10 w-full container mx-auto py-28 md:py-36"
        style={{
          paddingLeft: "clamp(16px,4vw,48px)",
          paddingRight: "clamp(16px,4vw,48px)",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          {/* Headline */}
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.028em",
              color: "#fff",
              marginBottom: "20px",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            UK Retail Vacancies —{" "}
            <span style={{ color: "#ff8a7f" }}>
              Hire Faster,
              <br />
              Hire Smarter.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "460px",
              marginBottom: "32px",
            }}
          >
            Connecting UK retail employers with qualified, payroll-ready
            candidates from Sri Lanka — retail-focused hiring, simplified.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "28px",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.retail-vacancies.uk"
              target="_blank"
              rel="noreferrer"
              className="hero-cta-primary"
            >
              Browse Vacancies
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 7.5h11M8.5 3.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.retail-vacancies.uk/recruiters-signup"
              target="_blank"
              rel="noreferrer"
              className="hero-cta-secondary"
            >
              Post a vacancy
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "44px",
            }}
          >
            {badges.map((b) => (
              <span key={b} className="hero-badge">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1.5 5.5l2.8 2.8 5-5"
                    stroke="#ff8a7f"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b}
              </span>
            ))}
          </motion.div>

          {/* Stats row — same values as FeaturesSection */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="hero-stat-divider" />}
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#ff8a7f",
                      lineHeight: 1,
                      marginBottom: "3px",
                      fontFamily: "'Georgia', serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.label}
                  </div>
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
