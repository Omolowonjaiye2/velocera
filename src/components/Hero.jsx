import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero({ car }) {
  return (
    <section className="hero">
      <motion.div
        className="hero__image"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundImage: `url(${car.image})` }}
      />
      <div className="hero__shade" />
      <div className="container hero__content">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          <p className="eyebrow">VÉLOCÉRA / AUTOMOTIVE ATELIER</p>
          <h1>ENGINEERED<br /><em>TO EXCITE.</em></h1>
          <p className="hero__description">
            Machines shaped by obsession, precision and the pursuit of an unforgettable drive.
          </p>
          <div className="button-row">
            <Link className="button button--light" to="/cars">
              Explore cars <ArrowUpRight size={16} />
            </Link>
            <Link className="button button--ghost" to="/brand">
              Discover the brand
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero__spec"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span>FEATURED MACHINE</span>
          <strong>{car.fullName}</strong>
          <small>{car.horsepower} HP / {car.topSpeed} / {car.acceleration}</small>
        </motion.div>
      </div>

      <a href="#featured" className="scroll-cue" aria-label="Scroll to featured models">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}