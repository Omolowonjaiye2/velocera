import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CarCard from "./CarCard";

export default function FeaturedCars({ cars }) {
  return (
    <section id="featured" className="section section--light">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">01 / FEATURED MODELS</p>
            <h2>THE <em>FLAGSHIPS.</em></h2>
          </div>
          <p>Three expressions of one philosophy: design without compromise, performance without apology.</p>
        </div>
        <div className="car-grid car-grid--featured">
          {cars.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
        </div>
        <div className="center-action">
          <Link className="button button--dark" to="/cars">View the collection <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}