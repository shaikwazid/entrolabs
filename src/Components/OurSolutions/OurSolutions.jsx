import React from "react";
import "./OurSolutions.css";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";

const solutions = [
  {
    title: "E-GOVERNANCE",
    desc: "We build e-Governance systems with a multi-level hierarchy in compliance with existing process.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    class: "orange",
    count: "01"
  },
  {
    title: "E-TICKETING",
    desc: "Web Portal and POS ticketing applications with Payment Gateway Integration.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=800",
    class: "blue",
    count: "02"
  },
  {
    title: "POS SOLUTIONS",
    desc: "Customized POS solution development. We also provide device assistance.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
    class: "green",
    count: "03"
  },
  {
    title: "QA AUTOMATION",
    desc: "Industry Quality Assurance and Testing Process automation applications.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    class: "red",
    count: "04"
  },
  {
    title: "SIS SOFTWARE",
    desc: "Industry Quality Assurance and Testing Process automation applications.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    class: "brinjal",
    count: "05"
  },
  {
    title: "IOT PRODUCT ENGINEERING",
    desc: "Custom IoT based product development and support.",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800",
    class: "orange",
    count: "06"
  }
];

const OurSolutions = () => {
  return (
    <section className="solutions-section lux-wrapper">
      <div className="container px-lg-5">

        {/* <div className="section-title text-center">
          <span>Our Solutions</span>
          <h2>Smart Digital Solutions</h2>
        </div> */}

        <SectionTitle
          badge="Our Solutions"
          title="Smart Digital"
          highlight="Solutions"
        />

        <div className="row">
          {solutions.map((item, index) => (
            <motion.div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`lux-card ${item.class}`}>

                <div className="lux-count">{item.count}</div>

                <div className="lux-image">
                  <img src={item.img} alt="" />
                </div>

                <div className="lux-content">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurSolutions;