import React from "react";
import "./SectionTitle.css";
import { motion } from "framer-motion";

const SectionTitle = ({
  badge,
  title,
  highlight,
  center = true,
  variant = "one"
}) => {
  return (
    <motion.div
      className={`lux-title lux-title-${variant} ${center ? "center" : ""}`}

      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}

      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      {badge && (
        <motion.div
          className={`lux-badge lux-badge-${variant}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {badge}
        </motion.div>
      )}

      <motion.h2
        className={`lux-heading lux-heading-${variant}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title} <span>{highlight}</span>
      </motion.h2>

      <motion.div
        className={`lux-divider lux-divider-${variant}`}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span></span>
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;