import { motion } from "framer-motion";
import "../css/MeetRealtor.css";

// IMAGES + ICONS
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import realtorOne from "../images/realtorOne.jpg";
import marissa from "../images/marissa.jpg";
import lydia from "../images/lydia.jpg";
import timothy from "../images/timothy.jpg";
import tina from "../images/tina.jpg";
import qulai from "../images/qulai.jpg";

function MeetRealtor() {
    const realtors = [
        {   
            img: realtorOne,
            title: "Phil Landeau",
            desc: "Phil is a seasoned agent known for calm guidance, clear communication, and steady support throughout every step of the buying or selling process."
        },
        {   
            img: marissa,
            title: "Marissa Vasquez",
            desc: "Marissa brings a friendly, down-to-earth approach, helping clients feel confident and informed while navigating big real estate decisions."
        },
        {   
            img: lydia,
            title: "Lydia Baker",
            desc: "Lydia focuses on detail, care, and consistency, offering thoughtful insights that make each client feel genuinely understood."
        },
        {   
            img: timothy,
            title: "Timothy Bisson",
            desc: "Timothy combines industry knowledge with a patient, honest style—always making sure clients feel supported at their own pace."
        },
        {   
            img: tina,
            title: "Tina Lu",
            desc: "Tina is known for her upbeat energy and sharp market awareness, creating a smooth, stress-free experience for buyers and sellers."
        },
        {   
            img: qulai,
            title: "Qulai Pong",
            desc: "Qulai offers a calm, thoughtful presence and reliable guidance, helping clients make confident moves with clarity and ease."
        },
    ];
    
    return (
        <section className="realtor-section">
            <header className="realtor-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                    <div className="breadcrumb">
                        Select a Realtor ❖
                    </div>
                    <h3 id="hero-heading" className="realtor-title">
                        Meet Our Realtors
                    </h3>
                    
                    <p id="hero-subheading" className="realtor-subtitle">
                        Meet OpalHomes' realtors here
                    </p>
                </motion.div>
            </header>
           
            <div className="realtor-card-display-container">
                <section className="realtor-content-display">
                {realtors.map((r, idx) => (
                    <article key={idx} className="realtor-card">
                        <div className="realtor-img-wrapper">
                            <img src={r.img} alt={`Realtor ${r.title}`} className="realtor-img"/>
                        </div>
                        <h3 className="realtor-card-title">{r.title}</h3>
                        <p className="realtor-card-desc">{r.desc}</p>
                        <ul className="social-links" aria-label="Social media">
                            <li className="social-tag">
                                <a href="#!" aria-label="Facebook"><FaFacebook /></a>
                            </li>
                            <li className="social-tag">
                                <a href="#!" aria-label="X (formerly Twitter)"><FaTwitter /></a>
                            </li>
                            <li className="social-tag">
                                <a href="#!" aria-label="LinkedIn"><FaLinkedin /></a>
                            </li>
                        </ul>
                        <button className="message-btn">
                            MESSAGE
                        </button>
                    </article>
                ))}
            </section>
            </div>
        </section>
    );
}

export default MeetRealtor