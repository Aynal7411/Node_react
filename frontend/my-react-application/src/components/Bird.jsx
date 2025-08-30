import { motion } from "framer-motion";

export default function Bird() {
  return (
    <motion.img
      src="http://localhost:5000/assets/bird.webp" // Node backend থেকে আসছে
      alt="bird"
      className="w-15 h-18 drop-shadow-2xl rounded-full border-2 border-white/50 
                 bg-gradient-to-br from-sky-150 to-sky-450 p-1 shadow-lg"
      animate={{ x: [0, 800, -300, 0], y: [0, -50, 25, 0], rotate: [0, 10, -10, 0] , scale: [1, 1.2, 0.8, 1] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
  );
}
