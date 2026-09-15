import React from "react";
import { motion } from "framer-motion";

export default function Specification({ car }) {
  const specs = [
    ["Horsepower", `${car.horsepower} HP`],
    ["Torque", car.torque],
    ["Top Speed", car.topSpeed],
    ["0–100 KM/H", car.acceleration],
    ["Engine", car.engine],
    ["Transmission", car.transmission],
    ["Drive Type", car.drive],
    ["Weight", car.weight]
  ];

  return (
    <section className="spec-section section--dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">03 / PERFORMANCE</p>
          <h2>NUMBERS WITH<br /><em>INTENTION.</em></h2>
        </div>
        <div className="stat-row">
          <Stat value={car.horsepower} suffix="HP" label="HORSEPOWER" />
          <Stat value={car.topSpeed} label="TOP SPEED" />
          <Stat value={car.acceleration} label="0–100 KM/H" />
        </div>
        <div className="spec-table">
          {specs.map(([label, value], i) => (
            <motion.div
              className="spec-row"
              key={label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <span>{label}</span><strong>{value}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix = "", label }) {
  return (
    <motion.div className="big-stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <strong>{value}<small>{suffix}</small></strong>
      <span>{label}</span>
    </motion.div>
  );
}