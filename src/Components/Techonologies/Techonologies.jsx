import React, { useState, useEffect } from "react";
import "./Technologies.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import { techData } from "./techdata";
import { useNavigate, useParams } from "react-router-dom";

const Technologies = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ get URL id

  // ✅ Sync slider with URL
  useEffect(() => {
    if (id) {
      const foundIndex = techData.findIndex(item => item.id === id);
      if (foundIndex !== -1) {
        setIndex(foundIndex);
      }
    }
  }, [id]);

  // ✅ Auto slide (pause if user is on specific tech page)
  useEffect(() => {
    if (id) return; // stop auto slide when coming from navbar

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <section className="tech-section">
      <div className="container px-lg-5">

        <SectionTitle
          badge="Our Technologies"
          title="Building Modern"
          highlight="Digital Solutions"
        />

        <div className="slider-wrapper">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="tech-slider-card align-items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >

              <div className="shape_two shape1"></div>

              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tech-content">
                    <h2>{techData[index].title}</h2>
                    <p>{techData[index].desc}</p>

                    {/* 🔥 Button */}
                    <motion.button
                      className="btn-53"
                      onClick={() =>
                        navigate(`/technologies/${techData[index].id}`)
                      }
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="original">View More</div>

                      <div className="letters">
                        {"View More".split("").map((char, i) => (
                          <span key={i}>
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </div>
                    </motion.button>

                    <div className="shape_two shape2"></div>
                  </div>
                </div>

                <div className="col-lg-6 text-center">
                  <div className="tech-image">
                    <img src={techData[index].img} alt="" />
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* DOTS */}
        <div className="slider-dots text-center mt-4">
          {techData.map((item, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
                navigate(`/technologies/${item.id}`); // ✅ sync URL
              }}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;