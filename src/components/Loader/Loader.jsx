import "./Loader.css";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-circle"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />

      <h1>AB</h1>

      <p>Loading Portfolio...</p>
    </motion.div>
  );
}

export default Loader;