import React from 'react'
// import Overview from '../Overview/Overview'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import { FaAward, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import ceo from "../../assets/persons/ceo.jpg";
import cto from "../../assets/persons/cto.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./About.css";


const statsData = [
    {
        number: "250+",
        label: "Projects Completed",
        img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
        number: "140+",
        label: "Expert Developers",
        img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
    },
    {
        number: "60+",
        label: "Happy Clients",
        img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },
    {
        number: "15+",
        label: "Awards Won",
        img: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
    }
];

const teamData = [
    {
        name: "Shanmukha Teja Varma G",
        role: "CEO at Entro Labs IT Solutions",
        img: ceo
    },
    {
        name: "Rajeevkiran S P",
        role: "Chief Technical Architect",
        img: cto
    },

];





const About = () => {


    // 🔥 animation variants
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const slideRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };




    return (
        <div>
            <BreadCrumb title="About" />

            {/* ================= ABOUT SECTION ================= */}
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE */}
                        <motion.div
                            className="col-lg-4"
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="about-img">
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600"
                                    alt="IT Team"
                                />
                            </div>
                        </motion.div>

                        {/* MIDDLE CONTENT */}
                        <motion.div
                            className="col-lg-5"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="about-content">

                                <h2 className="experience">10+</h2>
                                <p className="exp-text">Years of Experience</p>

                                <h1>
                                    We Build Smart <br />
                                    Digital Solutions
                                </h1>

                                <p className="desc">
                                    We deliver scalable IT solutions that transform businesses.
                                    From web and mobile apps to enterprise systems, we help you
                                    innovate and grow with cutting-edge technology.
                                </p>

                                {/* <button className="about-btn">Explore More</button> */}
                            </div>
                        </motion.div>

                        {/* RIGHT FEATURES */}
                        <motion.div
                            className="col-lg-3"
                            variants={slideRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="about-features">

                                <div className="feature-box">
                                    <FaAward className="icon" />
                                    <div>
                                        <h5>Award Winning</h5>
                                        <p>Delivering high-quality solutions with proven excellence.</p>
                                    </div>
                                </div>

                                <div className="feature-box">
                                    <FaUsers className="icon" />
                                    <div>
                                        <h5>Dedicated Team</h5>
                                        <p>Expert team ensuring seamless delivery and strong support.</p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

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
                            >
                                <img src={item.img} alt="" />
                                <h3>{item.number}</h3>
                                <p>{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>



            {/* histroy section  */}

            <section className="history-section">
                <div className="container">

                    <div className="row align-items-center">

                        {/* IMAGE */}
                        <motion.div
                            className="col-lg-5"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="history-img">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
                                    alt="IT Company"
                                />
                            </div>
                        </motion.div>

                        {/* CONTENT */}
                        <motion.div
                            className="col-lg-7"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="history-content">

                                <span className="badge">OVER 9+ YEARS EXPERIENCE</span>
                                {/* <h5 className="experience">OVER 9+ YEARS EXPERIENCE</h5> */}

                                <h2>Our History</h2>

                                <p>
                                    In 2015, a small group of technology enthusiasts came together
                                    to script a new chapter in the IT industry of India. Driven by a
                                    bold vision, they aimed to collaborate with global organizations
                                    in transforming into competitive and complete digital enterprises.
                                </p>

                                <p>
                                    Initially, the focus was on partnering with State Governments
                                    of India (Telangana & Andhra Pradesh), delivering innovative
                                    e-Governance and IoT solutions. Over time, we expanded to serve
                                    educational institutions, corporate, and industrial clients
                                    across India.
                                </p>

                                <p>
                                    Founded by <strong>Shanmukha Teja Verma Gottumukkala</strong>,
                                    along with a small team of specialists, Entro Labs has now grown
                                    into a team of 100+ professionals across 12 specialized teams.
                                </p>

                                <p>
                                    With strong experience in government collaborations, we continue
                                    to build reliable, scalable, and future-ready IT solutions —
                                    redefining the direction of our technology portfolio.
                                </p>

                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>


            <section className="team-section">
                <div className="container">

                    {/* HEADER */}
                    <motion.div
                        className="text-center mx-auto team-header"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="team-subtitle">Our Team</p>
                        <h1 className="team-title">
                            Dedicated & Experienced Team Members
                        </h1>

                    </motion.div>

                    {/* TEAM GRID */}
                    <motion.div
                        className="row g-4"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {teamData.map((member, index) => (
                            <motion.div
                                className="col-lg-3 col-md-6"
                                key={index}
                                variants={item}
                                whileHover={{ y: -10 }}
                            >
                                <div className="team-item rounded">

                                    {/* IMAGE */}
                                    <img className="img-fluid" src={member.img} alt="" />

                                    {/* TEXT OVERLAY */}
                                    <div className="team-text">
                                        <h4 className="mb-0">{member.name}</h4>
                                        <p className="text-primary">{member.role}</p>

                                        {/* SOCIAL */}
                                        <div className="team-social d-flex">
                                            <a className="btn btn-square rounded-circle me-2" href="/">
                                                <FaFacebookF />
                                            </a>
                                            <a className="btn btn-square rounded-circle me-2" href="/">
                                                <FaTwitter />
                                            </a>
                                            <a className="btn btn-square rounded-circle me-2" href="/">
                                                <FaInstagram />
                                            </a>
                                        </div>
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

export default About