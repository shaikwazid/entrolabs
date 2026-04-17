import React from "react";
import { motion } from "framer-motion";
import "./Overview.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import two from "../../assets/gif/web.png";

const Overview = () => {
  return (
    <div>
      <section className="overview-section">
        <div className="container">
          <motion.div
            className="section-title-wrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="About Company"
              title=" Transforming Ideas Into"
              highlight="Digital Excellence"
            />
          </motion.div>
          <div className="row ">
            <div className="col-lg-6 mb-lg-0">
              <motion.div
                className="overview-image"
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="">
                  <img src={two} alt="overview" className="img-fluid" />
                </div>
                {/* <div className="shape shape1"></div>
                <div className="shape shape2"></div> */}
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="overview-content px-lg-5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Entro Labs transforms business enterprises with
                  next-generation digital capabilities. We offer end-to-end
                  support on the next generation, innovative, and competitive
                  digital capabilities. We help businesses across different
                  sectors to navigate new possibilities, and achieve higher
                  quality and greater operational efficiency. We work as your
                  dedicated standalone software services provider.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Importantly, our IT competencies cover Enterprise Application
                  Services, Software Product Engineering, Mobility Solutions,
                  Business Process Services, and Industry-specific solutions.
                </motion.p>

                <motion.button
                  className="btn-53"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="original">Discover More</div>

                  <div className="letters">
                    {"Discover More".split("").map((char, i) => (
                      <span key={i}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
