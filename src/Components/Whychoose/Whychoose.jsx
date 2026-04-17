import React from "react";
import "./Whychoose.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import logo1 from "../../assets/logo-black.png";

const slides = [
    {
        title: "Why Choose EntroLabs?",
        desc: "We bridge the gap between businesses and technology with innovative solutions that simplify operations, improve efficiency, and deliver long-term value.",
        img: logo1
    },
    {
        title: "Digital Transformation",
        desc: "We empower businesses to innovate, adapt, and grow with next-generation digital solutions that enhance performance and resilience.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    },
    {
        title: "Collaborative Approach",
        desc: "We work closely with clients to understand their goals and deliver agile solutions that drive long-term success.",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    },
];

const Whychoose = () => {
    return (
        <section className="whychoose-section">
            <div className="container ">



                <div className=" ">
                    <div className="">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500 }}
                            loop={true}
                        >
                            {slides.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="why-slide">

                                        {/* IMAGE */}
                                        <motion.div
                                            className="why-img"
                                            initial={{ opacity: 0, x: -80 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <img src={item.img} alt={item.title} />
                                        </motion.div>

                                        {/* TEXT */}
                                        <motion.div
                                            className="why-text"
                                            initial={{ opacity: 0, x: 80 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <motion.h2
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {item.title.split(" ")[0]}{" "}
                                                <span>{item.title.split(" ").slice(1).join(" ")}</span>
                                            </motion.h2>

                                            <motion.p
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {item.desc}
                                            </motion.p>

                                            <motion.button
                                                className="why-btn"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                Get Started
                                            </motion.button>
                                        </motion.div>



                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Whychoose;