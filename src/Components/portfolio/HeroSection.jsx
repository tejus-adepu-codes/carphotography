import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "/src/photos/best/DSC08330.jpg";

export default function HeroSection() {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Scroll-based zoom effect ---
  const { scrollY } = useScroll();
  // scale from 1 → 1.2 as you scroll 0 → 500px
  const scale = useTransform(scrollY, [0, window.innerHeight], [1.5, 4]);
  // optional vertical parallax: move up slightly
  const y = useTransform(scrollY, [0, innerHeight], [0, -50]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Featured car"
          className="w-full h-full object-cover opacity-60"
          style={{ scale, y }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-[#d4a853] text-xs md:text-sm uppercase tracking-[0.5em] mb-6"
          >
            Automotive Media
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight">
            <span className="block">tejus.adepu</span>
            <span className="block mt-2 font-extralight italic text-white/90">
              media
            </span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mx-auto mt-10"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToGallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#d4a853] transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
