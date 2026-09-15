import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search-box">
      <Search size={18} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search the collection..."
        aria-label="Search cars"
      />
      {value && <button type="button" onClick={() => onChange("")} aria-label="Clear search"><X size={16} /></button>}
    </label>
  );
}