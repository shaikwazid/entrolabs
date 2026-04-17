import React from 'react'
import './ContactUs.css'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import { motion } from "framer-motion";

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
                    <div className="row align-items-center">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="col-lg-6 mb-4"
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="contact-info">
                                <h2>We'd love to hear From you.</h2>
                                <p>
                                    Join our smart missions by reaching out to Entrolabs. To schedule an appointment, feel free to use our contact form or simply drop us an email. We can arrange a phone or Skype call to connect.
                                </p>

                                {[
                                    { title: "Email", value: "support@entrolabs.com" },
                                    { title: "Phone", value: "+91-4042016637" },
                                    {
                                        title: "Location",
                                        value: "First Floor, Plot No:479, Road No:10, Kakatiya Hills, Madhapur, Hyderabad, Telangana 500081"
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        className="info-box"
                                        key={i}
                                        variants={fadeUp}
                                    >
                                        <h5>{item.title}</h5>
                                        <p>{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            className="col-lg-6"
                            variants={slideRight}
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
                                        className="btn-submit"
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