import "../css/About.css";

import { motion } from "framer-motion";

// ICONS
import { FaHandHoldingHeart } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { TbNumber20Small } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { BsStars } from "react-icons/bs";

function About() {
    const about = [
        {   icon: <RiHomeHeartFill />,
            title: "Our Mission",
            desc: "Dedicated to building better spaces for everyone."
        },
        {   icon: <TbNumber20Small />,
            title: "Years of Experience",
            desc: "With 20+ years in reconstruction, Opal Homes provides the highest remodeling quality."
        },
        {   icon: <GrUserWorker />,
            title: "Licensed Specialists",
            desc: "All-around professionalism when handling operational, resource, and compensation fixtures."
        },
        {   icon: <BsStars />,
            title: "Customer Satisfaction",
            desc: "Administered over 10,000 successful reconstructions and you could be next."
        },
        {   icon: <FaHandHoldingHeart />,
            title: "Community Rebuilds",
            desc: "Partnered with widely recognized homeless shelters to build small homes or supply necessary resources for the homeless."
        }
    ]
    return (
         <section className="about-section">
            <header className="about-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                    <div className="breadcrumb">
                        About Us ❖
                    </div>
                    <h3 id="hero-heading" className="about-title">
                        Who is OpalHomes?
                    </h3>
                    
                    <p id="hero-subheading" className="about-subtitle">
                    At OpalHomes, <strong>we</strong> believe finding your dream home should feel effortless.  
                    For years, we've helped individuals and families discover spaces that inspire <strong>comfort</strong>, 
                    <strong> connection</strong>, and <strong>confidence</strong> in every step of the buying journey.
                    </p>
                    <p>
                    Founded in 2006, our team brings together dedicated agents, designers, and real estate specialists 
                    who share one vision — to make homeownership <strong>accessible</strong>, <strong>transparent</strong>, and <strong>personalized</strong> for everyone.  
                    Whether you're purchasing your first home or searching for a new beginning, 
                    OpalHomes is here to guide you with integrity and care.
                    </p>
                </motion.div>
            </header>
            <div className="about-img-wrapper"></div>
            <div className="about-card-display-container">
                <section className="about-content-display">
                {about.map((a, idx) => (
                    <article key={idx} className="about-card">
                        <span className="about-card-icon-wrapper">
                            {a.icon}
                        </span>
                        <h3 className="about-card-title">{a.title}</h3>
                        <p className="about-card-desc">{a.desc}</p>
                    </article>
                ))}
            </section>
            </div>
        </section>
    );
}

export default About;