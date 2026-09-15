import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CarCard({ car, index = 0 }) {
  return (
    <motion.article
      className="car-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
    >
      <Link to={`/cars/${car.id}`} className="car-card__image-wrap">
        <img src={car.image} alt={`${car.fullName} exterior`} loading="lazy" />
        <span className="card-index">0{index + 1}</span>
        <span className="card-arrow"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="car-card__body">
        <div>
          <p className="eyebrow">{car.category} / {car.year}</p>
          <h3>{car.fullName}</h3>
        </div>
        <p className="car-price">{car.priceLabel}</p>
        <div className="car-card__stats">
          <span><b>{car.horsepower}</b> HP</span>
          <span><b>{car.topSpeed}</b></span>
          <span><b>{car.acceleration}</b> 0–100</span>
        </div>
        <Link to={`/cars/${car.id}`} className="text-link">Explore model <ArrowUpRight size={15} /></Link>
      </div>
    </motion.article>
  );
}