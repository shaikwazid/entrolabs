import React from 'react'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import Overview from '../Components/Overview/Overview'
import OurSolutions from '../Components/OurSolutions/OurSolutions'
import Features from '../Components/Features/Features'
import Technologies from '../Components/Techonologies/Techonologies'
import Stats from '../Components/Stats/Stats'
import Clients from '../Components/Clients/Clients'
// import overviewImg from "../assets/about-illustration.png";
import img10Plus from "../assets/10_plus.jpg";
import Whychoose from '../Components/Whychoose/Whychoose'

const Home = () => {
    return (
        <div>
            <HomeSlider />

            <Overview />
            <Technologies />

            <OurSolutions />


            <Stats />




            <Features />

            <Whychoose />

            <section className='premium-intro3 d-none '>


                <div className="container ">
                    <div className="row align-items-center">

                        <div className="col-lg-7">
                            <div className="">
                                <div className="intro-glow"></div>

                                <p>
                                    With <span>7 years</span> of Web Design & Development experience, we bring
                                    <strong> excellence and premium quality</strong> to your business.
                                    At <b>EntroLabs</b>, we provide the finest, creative web and app solutions
                                    for your tech needs, and help create a seamless experience that puts you
                                    <em>a cut above the rest.</em>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">



                            <div className="text-centero">
                                <img src={img10Plus} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Clients />





        </div>
    )
}

export default Home