import { motion } from "framer-motion";
import "../css/Contact.css";

function Contact() {
    return (
        <section className="contact-section">
            {/* CONTACT PICTORIAL INFO BOX */}
             <header className="about-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                    <div className="breadcrumb">
                        Contact ❖
                    </div>
                    <h3 id="hero-heading" className="contact-title">
                       Reach Out
                    </h3>
                    
                    <p id="hero-subheading" className="contact-subtitle">
                        If you have a property-related request, please don't
                        hesitate to reach out to OpalHomes! We'd love to 
                        assist you with whatever you need.
                    </p>
                </motion.div>
            </header>
            <section className="form-section">
                <label htmlFor="c-fname">First Name
                <input
                    id="c-fname"
                    type="text"
                    placeholder="Enter your first name"
                    required
                />
                </label>
                <label htmlFor="c-lname">Last Name
                <input
                    id="c-lname"
                    type="text"
                    placeholder="Enter your last name"
                    required
                />
                </label>
                <label htmlFor="c-message">Message
                    <textarea 
                        id="c-message"
                        placeholder="Please provide relevant details about your request"
                        required
                    />
                </label>
                
                <button 
                    type="button"
                    className="send-message-btn"
                >
                    Send Message 
                </button>
            </section>
        </section>
    );
}

export default Contact