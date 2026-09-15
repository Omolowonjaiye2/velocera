import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { getCar } from "../data/cars";
import Specification from "../components/Specification";
import Gallery from "../components/Gallery";
import Configurator from "../components/Configurator";

export default function CarDetails() {
  const { id } = useParams();
  const car = getCar(id);

  if (!car) return <NotFoundCar />;

  return (
    <div className="car-details">
      <section className="detail-hero">
        <div className="detail-hero__image" style={{ backgroundImage: `url(${car.image})` }} />
        <div className="detail-hero__shade" />
        <div className="container detail-hero__content">
          <Link className="back-link" to="/cars"><ArrowLeft size={15} /> Back to collection</Link>
          <div>
            <p className="eyebrow">{car.category} / {car.year}</p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>{car.fullName}</motion.h1>
            <p>{car.description}</p>
            <div className="button-row">
              <a href="#configure" className="button button--light">Build your car <ArrowUpRight size={16} /></a>
              <Link to="/compare" className="button button--ghost">Compare models</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-intro section--light">
        <div className="container detail-intro__grid">
          <p className="eyebrow">02 / THE MACHINE</p>
          <div>
            <h2>DESIGNED AROUND<br /><em>THE DRIVER.</em></h2>
            <p>{car.philosophy}</p>
          </div>
        </div>
      </section>

      <Specification car={car} />

      <section className="editorial-full section--light">
        <div className="editorial-full__image"><img src={car.gallery[1]} alt={`${car.fullName} design`} loading="lazy" /></div>
        <div className="container editorial-full__content">
          <p className="eyebrow">04 / DESIGN</p>
          <h2>EVERY LINE<br /><em>HAS A JOB.</em></h2>
          <p>{car.philosophy} Surfaces are taut, purposeful and shaped to make the machine feel in motion even when standing still.</p>
        </div>
      </section>

      <section className="tech-section section--light">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">05 / TECHNOLOGY</p>
            <h2>INTELLIGENCE<br /><em>IN MOTION.</em></h2>
          </div>
          <div className="tech-grid">
            {car.technology.map((item, i) => (
              <motion.div className="tech-card" key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
                <span>0{i + 1}</span><h3>{item}</h3><p>Engineered as part of a complete performance system, not an isolated feature.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Gallery images={car.gallery} name={car.fullName} />

      <div id="configure"><Configurator car={car} /></div>
    </div>
  );
}

function NotFoundCar() {
  return (
    <div className="not-found page">
      <p className="eyebrow">404 / MACHINE NOT FOUND</p>
      <h1>THIS MACHINE<br /><em>DOESN'T EXIST.</em></h1>
      <Link className="button button--light" to="/cars">Return to collection</Link>
    </div>
  );
}