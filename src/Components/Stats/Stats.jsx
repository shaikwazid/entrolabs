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

      <div class="shape-image-animation bottom-0 p-0 w-100 d-none d-md-block">
        <svg xmlns="http://www.w3.org/2000/svg" widht="3000" height="400" viewBox="0 180 2500 200" fill="#f9faf7">
          <path class="st1" d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
            <animate
              attributeName="d"
              dur="5s"
              values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                            M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
              repeatCount="indefinite"
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