import React, { useState, useEffect } from "react";
import "./Technologies.css";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";

const techData = [
  {
    title: "Mobile App Development",
    desc: "Entro Labs helps in building mobile apps that meet the needs of customers and staff with efficiency.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900"
  },
  {
    title: "Web Application Development",
    desc: "We design, build, and evolve web-based software. We custom develop impactful, full-scale and next-gen web apps.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900"
  },
  {
    title: "Services and API Development",
    desc: "Through our API development services you can eliminate silos and transform your business with data-driven systems.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900"
  }
];

const Technologies = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
              className="tech-slider-card  align-items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >

              <div className="shape_two shape1"></div>
              {/* LEFT CONTENT */}
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tech-content">
                    <h2>{techData[index].title}</h2>
                    <p>{techData[index].desc}</p>



                    <motion.button
                      className="btn-53"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="original">View More</div>

                      <div className="letters">
                        {"View More".split("").map((char, i) => (
                          <span key={i}>{char === " " ? "\u00A0" : char}</span>
                        ))}
                      </div>
                    </motion.button>

                    <div className="shape_two shape2"></div>


                  </div>
                </div>

                {/* RIGHT IMAGE */}
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
          {techData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Technologies;