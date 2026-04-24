import React from 'react'
import './BreadCrumb.css'

const BreadCrumb = ({ title }) => {
    return (
        <div>
            <section>
                <div className="breadcrumb-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content container">
                                    <h1>{title}</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* wave animation */}
                    <div className="shape-image-animation d-none d-md-block">
                        <svg
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            width="100%"
                            height="100%"
                            fill="#f9faf7"
                        >
                            <path>
                                <animate
                                    attributeName="d"
                                    dur="5s"
                                    repeatCount="indefinite"
                                    values="
                                                    M0,160 C480,300 960,20 1440,160 L1440,320 L0,320 Z;
                                                    M0,160 C240,20 720,300 1440,160 L1440,320 L0,320 Z;
                                                    M0,160 C480,300 960,20 1440,160 L1440,320 L0,320 Z
                                                    "
                                />
                            </path>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BreadCrumb