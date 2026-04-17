import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import './Services.css'
import Features from '../Features/Features'
import SectionTitle from '../SectionTitle/SectionTitle'
import { motion } from "framer-motion"

const Services = ({ colClass = "col-lg-6" }) => {

    const introData = [
        "Entro Labs pioneers high quality, affordable, reliable and scalable Enterprise Application Services (EAS). We help organizations achieve better information sharing by simplifying IT processes, automating workflows, and improving flexibility.",
        "We integrate digital customer experiences, attract talent, engage business networks, and manage operations effectively — delivering measurable impact across your organization."
    ]

    const ctaData = {
        title: "Let’s Build Your Next Digital Solution",
        desc: "Partner with us to transform your business with cutting-edge technology.",
        button: "Get Started"
    }

    return (
        <div>
            <BreadCrumb title="Services" />

            <section className="services-section">
                <div className="container">

                    {/* TITLE ANIMATION */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            badge="Our Services"
                            title="Feature"
                            highlight="Services"
                        />
                    </motion.div>

                    <div className="row">

                        {/* LEFT SIDE CONTENT */}
                        <div className="col-lg-6">

                            {/* HEADER TEXT */}
                            <motion.div
                                className="services-header text-center"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <p>
                                    We deliver scalable, innovative and high-performance solutions that drive business growth.
                                </p>
                            </motion.div>

                            {/* INTRO PARAGRAPHS */}
                            <div className="services-intro">
                                {introData.map((text, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.2
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>

                            {/* CTA */}
                            <motion.div
                                className="services-cta text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3>{ctaData.title}</h3>
                                <p>{ctaData.desc}</p>
                                <button>{ctaData.button}</button>
                            </motion.div>

                        </div>

                        {/* RIGHT SIDE FEATURES */}
                        <motion.div
                            className={colClass}
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <Features
                                colClass="col-lg-12 col-md-12"
                                showTitle={false}
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services