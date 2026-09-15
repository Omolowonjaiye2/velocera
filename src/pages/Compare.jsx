import React from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { cars } from "../data/cars";
import ComparisonTable from "../components/ComparisonTable";

export default function Compare() {
  const [selected, setSelected] = useState([cars[0].id, cars[1].id]);

  const chosen = useMemo(() => selected.map((id) => cars.find((car) => car.id === id)).filter(Boolean), [selected]);

  const addCar = (id) => {
    if (selected.length < 3 && !selected.includes(id)) setSelected([...selected, id]);
  };

  const removeCar = (id) => setSelected(selected.filter((item) => item !== id));

  return (
    <div className="page">
      <section className="page-hero page-hero--compare">
        <div className="container">
          <p className="eyebrow">VÉLOCÉRA / ANALYSIS</p>
          <h1>THE <em>COMPARISON.</em></h1>
          <p>Put up to three machines side by side and discover what separates them.</p>
        </div>
      </section>

      <section className="compare-section section--light">
        <div className="container">
          <div className="compare-picker">
            <div className="compare-picker__head">
              <div><p className="eyebrow">SELECT MACHINES</p><h2>CHOOSE YOUR <em>LINEUP.</em></h2></div>
              <span>{chosen.length} / 3 SELECTED</span>
            </div>
            <div className="compare-chips">
              {chosen.map((car) => (
                <div className="compare-chip" key={car.id}>
                  <img src={car.image} alt="" /><span>{car.fullName}</span>
                  <button onClick={() => removeCar(car.id)} aria-label={`Remove ${car.fullName}`}><X size={15} /></button>
                </div>
              ))}
              {chosen.length < 3 && (
                <select className="add-model" defaultValue="" onChange={(e) => addCar(e.target.value)}>
                  <option value="" disabled>+ Add a model</option>
                  {cars.filter((car) => !selected.includes(car.id)).map((car) => <option key={car.id} value={car.id}>{car.fullName}</option>)}
                </select>
              )}
            </div>
          </div>

          {chosen.length >= 2 ? <ComparisonTable cars={chosen} /> : (
            <div className="empty-state"><h2>SELECT AT LEAST<br /><em>TWO MACHINES.</em></h2></div>
          )}

          <div className="center-action">
            <Link className="button button--dark" to="/cars">Explore all models <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}