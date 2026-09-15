import React from "react";

const categories = ["All", "Supercar", "Hypercar", "Grand Tourer", "Electric", "SUV"];

export default function FilterBar({ category, setCategory, sort, setSort }) {
  return (
    <div className="filter-bar">
      <div className="filter-tabs" role="tablist" aria-label="Filter by category">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "selected" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <label className="sort-select">
        <span>Sort</span>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort cars">
          <option value="newest">Newest</option>
          <option value="horsepower">Highest horsepower</option>
          <option value="speed">Highest top speed</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
        </select>
      </label>
    </div>
  );
}