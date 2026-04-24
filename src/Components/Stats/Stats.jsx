import React from "react";
import "./Stats.css";
import { motion } from "framer-motion";
import one from "../../assets/gif/cal.png";
import two from "../../assets/gif/web.png";
import three from "../../assets/gif/clients.png";
import four from "../../assets/gif/mobile.png";
// import projects from "../../assets/about/projects.png";
import expertise from "../../assets/about/experts.png";
import happyClients from "../../assets/about/clients.png";
import awards from "../../assets/about/award.png";
import experience from "../../assets/about/experience.png";

const stats = [
  {
    number: "10+",
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


const statsData = [
  {
    number: "10+",
    label: "Years Experience",
    img: experience,
    color: "#ee4029ff",
    desc: 'Delivered diverse, high-quality projects across multiple industries.'
  },
  // {
  //   number: "250+",
  //   label: "Projects Completed",
  //   img: projects,
  //   color: "#4CAF50",
  //   desc: 'Successfully delivered diverse projects across multiple industries with excellence.'
  // },
  {
    number: "140+",
    label: "Experts",
    img: expertise,
    color: "#2196F3",
    desc: 'Highly skilled professionals dedicated to turning ideas into powerful digital solutions.'
  },
  {
    number: "60+",
    label: "Happy Clients",
    img: happyClients,
    color: "#cc00ffff",
    desc: 'Trusted by organizations worldwide for reliable IT solutions and continuous support.'
  },
  {
    number: "15+",
    label: "Awards Won",
    img: awards,
    color: "#ffc400ff",
    desc: 'Recognized globally for excellence in technology innovation and service delivery.'
  }
];



const Stats = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return (

    <>
      <section className="stats-3d-premium d-none">

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


      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="container">

          <div className="stats-grid">
            {statsData.map((item, i) => (
              <motion.div
                className="stat-card"
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.05 }}
                style={{ borderBottom: `5px solid ${item.color}` }}
              >
                <img src={item.img} alt="" />
                <h3 style={{ color: item.color }}>{item.number}</h3>
                <p>{item.label}</p>
                <div className='d-flex gap-2 mb-2 align-items-center justify-content-center'><span style={{ width: '50px', height: '3px', backgroundColor: item.color, borderRadius: '30px' }}></span><span style={{ width: '4px', height: '4px', backgroundColor: item.color, borderRadius: '50%' }}></span></div>
                <p className="card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


    </>



  );
};

export default Stats;