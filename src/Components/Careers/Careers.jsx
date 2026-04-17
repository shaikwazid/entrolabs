import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import './Careers.css'
import { motion } from "framer-motion";

const Careers = () => {

    // 🔥 Animation Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div>
            <BreadCrumb title="Careers" />

            <section className="careers-section">
                <div className="container">

                    {/* HERO */}
                    <motion.div
                        className="careers-hero text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1>Join Our Team</h1>
                        <p>
                            Be part of an innovative IT company where creativity meets technology.
                            Grow your career with us and build impactful solutions.
                        </p>
                    </motion.div>

                    {/* WHY JOIN */}
                    <motion.div
                        className="row mt-5 g-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Growth Opportunities",
                                desc: "Work on cutting-edge technologies and grow your skills rapidly."
                            },
                            {
                                title: "Great Culture",
                                desc: "Collaborative environment with supportive and friendly team."
                            },
                            {
                                title: "Flexible Work",
                                desc: "We value work-life balance and flexible working options."
                            }
                        ].map((item, index) => (
                            <motion.div
                                className="col-md-4"
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.03 }}
                            >
                                <div className="career-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* OPEN POSITIONS */}
                    <div className="openings mt-5">
                        <motion.h2
                            className="section-title text-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Current Openings
                        </motion.h2>

                        <motion.div
                            className="row g-4 mt-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    title: "Frontend Developer",
                                    desc: "React, JavaScript, UI/UX"
                                },
                                {
                                    title: "Backend Developer",
                                    desc: "Node.js, PHP, APIs"
                                },
                                {
                                    title: "Mobile App Developer",
                                    desc: "Android / iOS, Flutter"
                                }
                            ].map((job, index) => (
                                <motion.div
                                    className="col-lg-4"
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className="job-card">
                                        <h5>{job.title}</h5>
                                        <p>{job.desc}</p>
                                        <button>Apply Now</button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="careers-cta text-center mt-5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3>Didn’t find your role?</h3>
                        <p>Send us your resume and we’ll get in touch with you.</p>
                        <button className="cta-btn">Submit Resume</button>
                    </motion.div>

                </div>
            </section>
        </div>
    )
}

export default Careers