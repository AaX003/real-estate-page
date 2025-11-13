import "../css/Newsletter.css";

import { motion } from "framer-motion";

function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="nl-img-wrapper"></div>
            <header className="newsletter-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                    <div className="breadcrumb">
                        Newsletter ❖
                    </div>
                    <h3 id="newsletter-heading" className="newsletter-title">
                        Subscribe to OpalHomes
                    </h3>
                    <p id="newsletter-subheading" className="newsletter-subtitle">
                        Subscribe for exclusive highlights, showcases, and more
                    </p>
                </motion.div>
            </header>
            <section className="nl-input-container">
                <label htmlFor="nl-email">Email
                <input
                    id="nl-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                </label>
                <label htmlFor="nl-fname">First Name
                <input
                    id="nl-fname"
                    type="name"
                    placeholder="Enter your first name"
                    required
                />
                </label>
                <label htmlFor="nl-lname">Last Name
                <input
                    id="nl-lname"
                    type="name"
                    placeholder="Enter your last name"
                    required
                />
                </label>
                <label htmlFor="nl-loca">Location
                <input
                    id="nl-loca"
                    type="name"
                    placeholder="Enter your location (optional)"
                />
                </label>
                
                <a 
                    type="button"
                    href="#login"
                    className="nl-subscribe-btn"
                >
                    Subscribe 
                </a>
            </section>
        </section>
    );
}

export default Newsletter