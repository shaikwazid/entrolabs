import { useParams } from "react-router-dom";
import { techData } from "./techdata";
import { motion } from "framer-motion";
import "./Technologies.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { PiArrowBendDownRightBold } from "react-icons/pi";


const TechnologyDetails = () => {
    const { id } = useParams();
    const tech = techData.find((item) => item.id === id);

    if (!tech) return <h2 className="text-center py-5">Not Found</h2>;

    return (
        <section className="tech-details-page">

            <BreadCrumb title={tech.title} />

            {/* HERO */}
            <div className="container tech-hero">
                <div className="row align-items-center">

                    <div className="col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1>{tech.title}</h1>
                            <p className="lead">{tech.overview}</p>
                        </motion.div>
                    </div>

                    <div className="col-lg-5 text-center">
                        <motion.img
                            src={tech.img}
                            alt=""
                            className="hero-img"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        />
                    </div>

                </div>
            </div>

            {/* SECTIONS */}
            <div className="container tech-sections">
                <div className="row">

                    {tech.sections.map((section, i) => (
                        <div className="col-lg-6 mb-3">
                            <motion.div
                                key={i}
                                className="section-card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h3>{section.title}</h3>


                                        <ul className="">
                                            {section.items.map((item, index) => (
                                                <li key={index} className="d-flex align-items-center"> <span className="me-2 icon_p"><PiArrowBendDownRightBold className="icon" /></span>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="img-block">
                                            <img src={section.img} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    ))}

                </div>
            </div>

            {/* SHAPES */}
            <div className="shape shape1"></div>
            <div className="shape shape2"></div>

        </section>
    );
};

export default TechnologyDetails;