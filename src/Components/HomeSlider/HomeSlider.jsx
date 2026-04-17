import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HomeSlider.css";
import slider1 from "../../assets/sliders/psn2.PNG";
import slider2 from "../../assets/sliders/psn1.PNG";
import slider3 from "../../assets/sliders/psn3.PNG";

const slides = [
    {
        title: "Drive ",
        subtitle: "Business Value",
        bg: slider1,
        theme: "theme-one",
    },
    {
        title: "Accelerate ",
        subtitle: "Process Optimization",
        bg: slider2,
        theme: "theme-two",
    },
    {
        title: "De-scaling ",
        subtitle: "Organizational Complexity.",
        bg: slider3,
        theme: "theme-three",
    },
];

export default function HomeSlider() {
    return (

        <div className="">
            <div className="">
                <div className="slider-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop
                        className="mySwiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div
                                        className="slide-bg"
                                        style={{
                                            backgroundImage: `url(${slide.bg})`,
                                            height: "550px",
                                        }}
                                    >
                                        {/* wave animation */}
                                        <div className="shape-image-animation d-none d-md-block">
                                            <svg viewBox="0 180 2500 200" fill="#f9faf7">
                                                <path d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 Z">
                                                    <animate
                                                        attributeName="d"
                                                        dur="5s"
                                                        repeatCount="indefinite"
                                                        values="
                          M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 Z;
                          M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 Z;
                          M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 Z
                        "
                                                    />
                                                </path>
                                            </svg>
                                        </div>

                                        {/* overlay */}
                                        <div className="overlay">
                                            <motion.div
                                                initial={{ opacity: 0, y: 80 }}
                                                animate={isActive ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.8 }}
                                                className={`content ${slide.theme}`}
                                            >
                                                <div className="">
                                                    {/* TITLE */}
                                                    <motion.h2
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ delay: 0.2 }}
                                                    >
                                                        {slide.title}
                                                    </motion.h2>

                                                    {/* SUBTITLE */}
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 40 }}
                                                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ delay: 0.4 }}
                                                    >
                                                        {slide.subtitle}
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}