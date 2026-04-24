import React from 'react'
import './ContactUs.css'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ct from "../../assets/ct.png";

const ContactUs = () => {

    // 🔥 Animation Variants
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
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
            <BreadCrumb title="Contact Us" />

            <section className="contact-section">
                <div className="container">
                    <div className="row ">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="col-lg-6 mb-4"
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="contact-info">
                                <h2><span>We'd love to hear From you.</span> </h2>
                                <p>
                                    Join our smart missions by reaching out to Entrolabs. To schedule an appointment, feel free to use our contact form or simply drop us an email. We can arrange a phone or Skype call to connect.
                                </p>

                                {[
                                    { title: "Email", value: "support@entrolabs.com", icon: <FaEnvelope /> },
                                    { title: "Phone", value: "+91-4042016637", icon: <FaPhone /> },
                                    {
                                        title: "Location",
                                        value: (
                                            <>
                                                First Floor, Plot No:479, Road No:10,<br />
                                                Kakatiya Hills, Madhapur, <br /> Hyderabad, Telangana 500081
                                            </>
                                        ),
                                        icon: <FaMapMarkerAlt />
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        className="info-box"
                                        key={i}
                                        variants={fadeUp}
                                    >

                                        <div className="d-flex gap-2 ">
                                            <span className="icon">{item.icon}</span>

                                            <div className="">
                                                <h5> {item.title}</h5>
                                                <p>{item.value}</p>
                                            </div>
                                        </div>

                                    </motion.div>
                                ))}


                                <motion.div
                                    className="img_ct"
                                // variants={fadeUp}
                                >
                                    <img src={ct} alt="" />
                                </motion.div>

                            </div>
                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            className="col-lg-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="contact-form"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <motion.input
                                                type="text"
                                                placeholder="Your Full Name"
                                                required
                                                variants={fadeUp}
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <motion.input
                                                type="email"
                                                placeholder="Your Email"
                                                required
                                                variants={fadeUp}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <motion.input
                                            type="text"
                                            placeholder="Mobile Number"
                                            variants={fadeUp}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <motion.input
                                            type="text"
                                            placeholder="Subject"
                                            variants={fadeUp}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <motion.textarea
                                            rows="5"
                                            placeholder="Your Message"
                                            variants={fadeUp}
                                        ></motion.textarea>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="btn-53"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs