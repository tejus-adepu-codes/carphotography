import { useState, useEffect } from "react";

const imageModules = import.meta.glob(
  "../../photos_compressed/**/**/*.webp",
  { eager: true }
);

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  // Load images
  useEffect(() => {
    const imgs = Object.entries(imageModules)
      .map(([_, mod]) => mod.default)
      .sort();

    setImages(imgs);
  }, []);

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images.length) return null;

  return (
    <section id="photogallery" className="bg-[#0a0a0a]">
      {/* HEADER */}
      <div className="text-center py-16 px-4">
        <p className="text-[#d4a853] text-xs uppercase tracking-[0.4em] mb-4">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-white">
          Selected Works
        </h2>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative w-full h-[92vh] overflow-hidden">

        {/* TRACK */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0">
              <img
                src={img}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl opacity-60 hover:opacity-100 transition"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl opacity-60 hover:opacity-100 transition"
        >
          ›
        </button>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}