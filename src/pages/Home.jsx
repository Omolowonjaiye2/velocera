import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cars } from "../data/cars";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";

export default function Home() {
  return (
    <>
      <Hero car={cars[1]} />
      <FeaturedCars cars={cars.slice(0, 4)} />

      <section className="manifesto">
        <div className="container manifesto__inner">
          <p className="eyebrow">02 / THE VÉLOCÉRA IDEA</p>
          <motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            WE DON'T BUILD<br />CARS. WE BUILD<br /><em>FEELING.</em>
          </motion.h2>
          <p className="manifesto__copy">
            VÉLOCÉRA exists between art and engineering — where proportion becomes presence,
            power becomes poetry, and every journey becomes a memory.
          </p>
          <Link className="text-link text-link--light" to="/brand">Read our story <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="home-editorial section--light">
        <div className="container editorial-grid">
          <div className="editorial-image editorial-image--tall">
            <img src={cars[4].gallery[1]} alt="VÉLOCÉRA Strada detail" loading="lazy" />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">03 / CRAFTED FOR MOTION</p>
            <h2>THE BEAUTY<br />OF <em>PURPOSE.</em></h2>
            <p>
              From the first line on the sketchpad to the final calibration,
              every VÉLOCÉRA is shaped around one question: does it make you want to drive?
            </p>
            <Link className="button button--dark" to="/cars">Explore the collection <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}