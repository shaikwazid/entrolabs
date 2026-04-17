import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import './Projects.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import { motion } from "framer-motion";
import two from "../../assets/gif/web.png";

const projectData = [
    {
        title: "SWM RFID",
        desc: "An IoT-Driven Garbage Collection Project",
        img: two
    },
    {
        title: "AP COVID-19 App and Dashboard",
        desc: "Gateway to COVID-19 Care Services",
        img: two
    },
    {
        title: "Dr Care",
        desc: "Digital Healthcare Ecosystem",
        img: two
    },
    {
        title: "Green My Street",
        desc: "Eco Vizag mobile solution",
        img: two
    },
    {
        title: "GVMC Street Lights",
        desc: "Real-time monitoring system",
        img: two
    },
    {
        title: "Paint My Street",
        desc: "Creative city transformation app",
        img: two
    },
    {
        title: "UDA Application",
        desc: "Building approval automation system",
        img: two
    },
    {
        title: "Supervision App",
        desc: "Anganwadi monitoring system",
        img: two
    },
    {
        title: "DDNS Temple System",
        desc: "Temple data management",
        img: two
    },
    {
        title: "LMS Application",
        desc: "Temple land management",
        img: two
    },
    {
        title: "Temple Accommodation",
        desc: "Temple lodging system",
        img: two
    },
    {
        title: "Village LMS",
        desc: "Lead management system",
        img: two
    },
    {
        title: "WDSC Welfare App",
        desc: "Services for disabled citizens",
        img: two
    },
    {
        title: "SDC Skill Development",
        desc: "Candidate-employer platform",
        img: two
    },
    {
        title: "TFL-QA",
        desc: "Quality testing system",
        img: two
    },
    {
        title: "SRKR Alumni",
        desc: "Alumni network platform",
        img: two
    },
    {
        title: "MBC Portal",
        desc: "Government scheme access",
        img: two
    },
    {
        title: "Rizee",
        desc: "NEET learning platform",
        img: two
    },
    {
        title: "Covid Chatbot",
        desc: "WhatsApp helpline system",
        img: two
    },
    {
        title: "MCKGC",
        desc: "Clean canals initiative",
        img: two
    }
];

const Projects = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div>
            <BreadCrumb title="Projects" />

            <section className="projects-section">
                <div className="container">

                    <SectionTitle
                        badge="Our Projects"
                        title="Driving Success Through"
                        highlight="Technology"
                    />

                    <div className="projects-header text-center">
                        <p>
                            Explore some of our impactful real-world solutions.
                        </p>
                    </div>

                    <motion.div
                        className="row g-4 mt-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projectData.map((project, index) => (
                            <motion.div
                                className="col-lg-3 col-md-6"
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -12, scale: 1.03 }}
                            >
                                <div className="project-card">

                                    {/* IMAGE */}
                                    <div className="project-img">
                                        <motion.img
                                            src={project.img}
                                            alt={project.title}
                                            onError={(e) => (e.target.src = "https://via.placeholder.com/400x240")}
                                            whileHover={{ scale: 1.1 }}
                                        />

                                        <div className="overlay">
                                            <h5>{project.title}</h5>
                                            <p>{project.desc}</p>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="project-content">
                                        <h5>{project.title}</h5>
                                        <p>{project.desc}</p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    )
}

export default Projects;