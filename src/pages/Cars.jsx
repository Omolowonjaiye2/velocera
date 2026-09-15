import React from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cars } from "../data/cars";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import CarCard from "../components/CarCard";

export default function Cars() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    const result = cars.filter((car) => {
      const matchesSearch = `${car.name} ${car.fullName} ${car.category}`.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || car.category === category;
      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      if (sort === "horsepower") return b.horsepower - a.horsepower;
      if (sort === "speed") return parseInt(b.topSpeed) - parseInt(a.topSpeed);
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return b.year - a.year;
    });
  }, [search, category, sort]);

  return (
    <div className="page">
      <section className="page-hero page-hero--collection">
        <div className="container">
          <p className="eyebrow">VÉLOCÉRA / COLLECTION</p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>THE <em>COLLECTION.</em></motion.h1>
          <p>Eight machines. One uncompromising philosophy. Explore the complete VÉLOCÉRA lineup.</p>
        </div>
      </section>

      <section className="collection section--light">
        <div className="container">
          <div className="collection-tools">
            <SearchBar value={search} onChange={setSearch} />
            <FilterBar category={category} setCategory={setCategory} sort={sort} setSort={setSort} />
          </div>

          <div className="results-meta">
            <span>{filtered.length} MACHINES</span>
            <span>{category.toUpperCase()}</span>
          </div>

          {filtered.length ? (
            <div className="car-grid">{filtered.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}</div>
          ) : (
            <div className="empty-state">
              <p className="eyebrow">NO RESULT</p>
              <h2>NO MACHINES MATCH<br /><em>YOUR SEARCH.</em></h2>
              <button className="button button--dark" onClick={() => { setSearch(""); setCategory("All"); }}>Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}