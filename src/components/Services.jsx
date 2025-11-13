import "../css/Services.css";
import { motion } from "framer-motion";

// ICONS
import { FaHouseCircleCheck, FaMapLocationDot } from "react-icons/fa6";
import { BsFillHousesFill } from "react-icons/bs";
import { MdRealEstateAgent, MdOutlineAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

function Services() {
    const services = [
        {
            icon: <FaHouseCircleCheck />,
            title: "Property Listings",
            desc: "We provide verified properties available across major cities."
        },
        {
            icon: <BsFillHousesFill />,
            title: "Property Management",
            desc: "We handle maintenance, tenant screening, payments, and more for your rentals."
        },
        {
            icon: <MdRealEstateAgent />,
            title: "Agent Assistance",
            desc: "Get matched with certified real estate agents based on your goals."
        }, 
        {
            icon: <FaHouseCircleCheck />,
            title: "Home Valuation",
            desc: "Receive a free property valuation and discover your home's current worth."
        },
        {
            icon: <FaMapLocationDot />,
            title: "Relocation Support",
            desc: "We offer support in ensuring you find your next home with ease."
        },
        {
            icon: <MdOutlineAttachMoney />,
            title: "Financing & Mortgage",
            desc: "Connect with trusted lenders and get pre-approval advice or register for a pre-approved plan."
        },
        {
            icon: <TbPigMoney />,
            title: "Investment Consultation",
            desc: "Learn where to invest next with expert insights and data-driven analysis."
        }
    ]

    return (
        <section className="services-section">
            <header className="services-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                <div className="breadcrumb">Services ❖</div>
                <h3 id="services-heading" className="services-title">
                    What We Work With
                </h3>
                <p id="services-subheading" className="services-subtitle">
                    Browse through our selection of services that we're specialized in
                </p>
                </motion.div>
            </header>
            <section className="services-display-container">
                {services.map((s, idx) => (
                    <div key={idx} className="services-card">
                        <span
                            aria-label={`Icon: ${s.title}`} 
                            id="services-card-icon" 
                            className="card-icon"
                        >
                            {s.icon}
                        </span>
                        <p id="services-card-title" className="card-title">{s.title}</p>
                        <p id="services-card-desc" className="card-desc">{s.desc}</p>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default Services