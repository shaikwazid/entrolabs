import technologies from "../../assets/technologies/image 2.png";
import Integrations from "../../assets/technologies/image 4.png";
import web1 from "../../assets/technologies/image 16.png";
import web2 from "../../assets/technologies/image 17.png";
import web3 from "../../assets/technologies/image 18.png";
import api1 from "../../assets/technologies/image 19.png";
import api2 from "../../assets/technologies/image 20.png";
import api3 from "../../assets/technologies/image 21.png";

export const techData = [
    {
        id: "mobile-app",
        title: "Mobile App Development",
        desc: "Entro Labs helps in building mobile apps...",
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=900",

        overview: `We live in a mobile-first world. Your customers and staff expect seamless, high-performance mobile experiences. Entro Labs builds efficient, scalable apps with faster turnaround.`,

        sections: [
            {
                title: "Technologies",
                img: technologies,
                items: [
                    "Android (Java / Kotlin)",
                    "Flutter (Android, iOS, Web)",
                    "React Native & Hybrid Apps",
                    "PWA (Progressive Web Apps)"
                ]
            },
            {
                title: "Integrations",
                img: Integrations,
                items: [
                    "Facial Recognition",
                    "Bluetooth Printers",
                    "Barcode Scanners",
                    "POS Integrations"
                ]
            }
        ]
    },

    {
        id: "web-app",
        title: "Web Application Development",
        desc: "We design, build, and evolve web apps...",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900",

        overview: `We build scalable, business-specific web applications tailored to client needs with modern technologies.`,

        sections: [
            {
                title: "Frontend & Frameworks",
                img: web1,
                items: [
                    "React JS",
                    "Next JS",
                    "HTML / CSS ",
                    "Java Script"
                ]
            },
            {
                title: "Backend & Cloud",
                img: web2,
                items: [
                    "Node JS (Express, GraphQL)",
                    "PHP",
                    "AWS / GCP",
                    "Docker"
                ]
            },
            {
                title: "Integrations",
                img: web3,
                items: [
                    "WebRTC",
                    "WebSockets",
                    "Payment Gateways",
                    "Aadhar & Biometric APIs"
                ]
            }
        ]
    },

    {
        id: "api-dev",
        title: "API Development",
        desc: "Transform your business with APIs...",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900",

        overview: `APIs connect systems and enable real-time data-driven architecture. We build scalable and secure API ecosystems.`,

        sections: [
            {
                title: "Technologies",
                img: api1,
                items: [
                    "Node JS",
                    "PHP",
                    "GraphQL"
                ]
            },
            {
                title: "Cloud & Services",
                img: api2,
                items: [
                    "AWS",
                    "Google APIs",
                    "Cloud Telephony",
                    "WhatsApp API"
                ]
            },
            {
                title: "Database",
                img: api3,
                items: [
                    "MySQL",
                    "MongoDB",
                    "Postgres"
                ]
            }
        ]
    }
];