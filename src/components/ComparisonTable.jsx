import React from "react";

export default function ComparisonTable({ cars }) {
  const rows = [
    ["Price", (c) => c.priceLabel, (a, b) => a.price < b.price],
    ["Horsepower", (c) => `${c.horsepower} HP`, (a, b) => a.horsepower > b.horsepower],
    ["Torque", (c) => c.torque, null],
    ["Top speed", (c) => c.topSpeed, (a, b) => parseInt(a.topSpeed) > parseInt(b.topSpeed)],
    ["0–100 km/h", (c) => c.acceleration, (a, b) => parseFloat(a.acceleration) < parseFloat(b.acceleration)],
    ["Engine", (c) => c.engine, null],
    ["Weight", (c) => c.weight, (a, b) => parseInt(a.weight.replace(",", "")) < parseInt(b.weight.replace(",", ""))],
    ["Transmission", (c) => c.transmission, null],
    ["Drive type", (c) => c.drive, null]
  ];

  return (
    <div className="comparison-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>SPECIFICATION</th>
            {cars.map((car) => <th key={car.id}><span>{car.category}</span>{car.fullName}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, getter, compare]) => {
            const values = cars.map(getter);
            const bestIndex = compare
              ? cars.findIndex((car) => cars.every((other) => car === other || compare(car, other)))
              : -1;
            return (
              <tr key={label}>
                <th>{label}</th>
                {values.map((value, i) => <td className={i === bestIndex ? "best" : ""} key={i}>{value}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}