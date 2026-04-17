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
                </div>
            </section>
        </div>
    )
}

export default BreadCrumb