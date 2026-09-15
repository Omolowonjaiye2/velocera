import React from "react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ images, name }) {
  const [selected, setSelected] = useState(null);

  const previous = () => setSelected((selected - 1 + images.length) % images.length);
  const next = () => setSelected((selected + 1) % images.length);

  return (
    <section className="section gallery-section section--light">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">06 / GALLERY</p>
            <h2>FORM IN<br /><em>MOTION.</em></h2>
          </div>
          <p>A closer look at the surfaces, details and spaces that define {name}.</p>
        </div>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <button key={src} className={`gallery-item gallery-item--${i + 1}`} onClick={() => setSelected(i)}>
              <img src={src} alt={`${name} gallery view ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true">
            <button className="lightbox__close" onClick={() => setSelected(null)} aria-label="Close gallery"><X /></button>
            <button className="lightbox__prev" onClick={previous} aria-label="Previous image"><ChevronLeft /></button>
            <motion.img key={selected} src={images[selected]} alt={`${name} gallery view`} initial={{ scale: .96 }} animate={{ scale: 1 }} />
            <button className="lightbox__next" onClick={next} aria-label="Next image"><ChevronRight /></button>
            <span className="lightbox__count">{String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}