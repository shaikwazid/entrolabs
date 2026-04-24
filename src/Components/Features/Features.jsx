import React from "react";
import "./Features.css";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import one from "../../assets/features/eps.jpg";
import two from "../../assets/features/spe.jpg";
import three from "../../assets/features/mobile_solutions.jpg";
import four from "../../assets/features/bps.jpg";
import five from "../../assets/features/industry.jpeg";

const features = [
  {
    title: <>Enterprise Application <span>Services</span></>,
    desc: "Attractive and responsive web design is key to designing an engaging web experience for your users.",
    img: one
  },
  {
    title: <>Software Product <span>Engineering</span></>,
    desc: "Our commitment to excellence, high technical standards and exceptional customer service.",
    img: two
  },
  {
    title: <>Mobility <span>Solutions</span></>,
    desc: "We deliver iOS, Android and cross-platform mobile applications backed by years of experience.",
    img: three
  },
  {
    title: <>Business Process <span>Services</span></>,
    desc: "We aim to transform your value-driven concepts into diligent solutions with the best software services.",
    img: four
  },
  {
    title: <>Industry & Platform <span>Solutions</span></>,
    desc: "Secure hosting services, optimized performance and application maintenance.",
    img: five
  }
];

const Features = ({ colClass = "col-lg-4 col-md-6", showTitle = true }) => {
  return (
    <section className="features-bg f_shape">
      <div className="container-fluid">

        {/* ✅ TITLE CONTROLLED HERE */}
        {showTitle && (
          <div className="features-title-wrapper">
            <SectionTitle
              badge="Our Services"
              title="Feature"
              highlight="Services"
            />
          </div>
        )}

        <div className="row">
          {features.map((item, i) => (
            <motion.div
              className={`${colClass} mb-4`}
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15
              }}
              viewport={{ once: true }}
            >
              <div className="feature-card">
                <div class="sct-accent-top2 line">

                </div>

                <div className="feature-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

                <div className="feature-img">
                  <img src={item.img} alt="feature" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;