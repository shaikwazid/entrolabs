import React from "react";
import "./Stats.css";
import { motion } from "framer-motion";
import one from "../../assets/gif/cal.png";
import two from "../../assets/gif/web.png";
import three from "../../assets/gif/clients.png";
import four from "../../assets/gif/mobile.png";

const stats = [
  {
    number: "7+",
    label: "Years Experience",
    img: one
  },
  {
    number: "250+",
    label: "Projects Delivered",
    img: two
  },
  {
    number: "60+",
    label: "Happy Clients",
    img: three
  },
  {
    number: "90+",
    label: "Mobile Apps",
    img: four
  }
];

const Stats = () => {
  return (
    <section className="stats-3d-premium">

      <div className="shape-image-animation d-none d-md-block">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          fill="#f9faf7"
        >
          <path>
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="
                                                    M0,160 C480,300 960,20 1440,160 L1440,320 L0,320 Z;
                                                    M0,160 C240,20 720,300 1440,160 L1440,320 L0,320 Z;
                                                    M0,160 C480,300 960,20 1440,160 L1440,320 L0,320 Z
                                                    "
            />
          </path>
        </svg>
      </div>
      <div className="container px-lg-5">

        <div className="row justify-content-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="col-lg-3 col-md-6 mb-2"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >

              <div className="stat-card-3d">

                <div className="stat-image">
                  <img src={item.img} alt={item.label} />
                </div>

                <div className="stat-info">
                  <h2>{item.number}</h2>
                  <p>{item.label}</p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;