import React from "react";
import { useState } from "react";

export default function Configurator({ car }) {
  const [color, setColor] = useState(car.colors[0]);
  const [wheel, setWheel] = useState(car.wheels[0]);
  const [interior, setInterior] = useState(car.interiors[0]);

  return (
    <section className="configurator section--dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">07 / CONFIGURATION</p>
          <h2>MAKE IT <em>YOURS.</em></h2>
        </div>
        <div className="config-grid">
          <div className="config-preview">
            <img src={car.image} alt={`${car.fullName} configured exterior`} />
            <div className="config-overlay">
              <span>{color}</span><span>{wheel}</span><span>{interior}</span>
            </div>
          </div>
          <div className="config-controls">
            <Option label="Exterior" options={car.colors} value={color} setValue={setColor} />
            <Option label="Wheels" options={car.wheels} value={wheel} setValue={setWheel} />
            <Option label="Interior" options={car.interiors} value={interior} setValue={setInterior} />
            <div className="config-total">
              <span>STARTING FROM</span><strong>{car.priceLabel}</strong>
            </div>
            <button className="button button--light">Request your specification</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Option({ label, options, value, setValue }) {
  return (
    <fieldset className="config-option">
      <legend>{label}</legend>
      <div>
        {options.map((option) => (
          <button type="button" key={option} className={value === option ? "selected" : ""} onClick={() => setValue(option)}>
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}