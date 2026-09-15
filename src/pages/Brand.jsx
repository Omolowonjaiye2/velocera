import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cars } from "../data/cars";

const pillars = [
  ["01", "Performance", "Power matters only when the chassis can translate it into something human. Every VÉLOCÉRA is calibrated around response."],
  ["02", "Design", "We chase proportion before decoration. The result is a silhouette that remains unmistakable without shouting."],
  ["03", "Innovation", "Technology should disappear into the experience. We build intelligence that gives the driver more, not less."],
  ["04", "Future", "Electrification changes the architecture of performance. Our ambition is to make the next era feel every bit as alive."]
];

export default function Brand() {
  return (
    <div className="brand-page">
      <section className="brand-hero">
        <div className="brand-hero__image" style={{ backgroundImage: `url(${cars[6].gallery[1]})` }} />
        <div className="brand-hero__shade" />
        <div className="container brand-hero__content">
          <p className="eyebrow">VÉLOCÉRA / OUR STORY</p>
          <h1>BUILT FROM<br /><em>OBSESSION.</em></h1>
        </div>
      </section>

      <section className="brand-story section--light">
        <div className="container brand-story__grid">
          <p className="eyebrow">01 / PHILOSOPHY</p>
          <div>
            <h2>A YOUNG BRAND<br />WITH AN <em>OLD SOUL.</em></h2>
            <p>VÉLOCÉRA is a fictional independent automotive atelier born from a simple belief: the most advanced machine in the world should still make you feel something.</p>
            <p>Our designers, engineers and craftspeople work as one studio — challenging each other from first sketch to final road calibration.</p>
          </div>
        </div>
      </section>

      <section className="brand-image-break">
        <img src={cars[4].gallery[0]} alt="VÉLOCÉRA performance car on road" loading="lazy" />
        <div><span>THE ROAD IS OUR LABORATORY.</span></div>
      </section>

      <section className="pillars section--dark">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">03 / WHAT DRIVES US</p><h2>FOUR <em>PILLARS.</em></h2></div>
          <div className="pillar-grid">
            {pillars.map(([number, title, copy]) => (
              <motion.article key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-future section--light">
        <div className="container brand-future__grid">
          <div>
            <p className="eyebrow">04 / THE FUTURE</p>
            <h2>THE NEXT<br /><em>CHAPTER.</em></h2>
          </div>
          <div>
            <p>We are building toward a future where electrification, lightweight materials and computational design unlock forms of performance we haven't imagined yet.</p>
            <Link className="button button--dark" to="/cars">Meet the machines <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}