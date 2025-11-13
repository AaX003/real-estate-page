import "../css/Types.css";

import { motion } from "framer-motion";

// IMAGES
import houses from "../images/houses.jpg";
import apartments from "../images/apartments.jpg";
import townhouses from "../images/townhouses.jpg";
import condos from "../images/condos.jpg";
import mansions from "../images/mansions.jpg";
import cottages from "../images/cottages.jpg";
import farms from "../images/farms.jpg";

function Types() {
    const types = [
    {
        img: houses,
        title: "Houses",
        quantity: "600 QTY"
    },
    {
        img: apartments,
        title: "Apartments",
        quantity: "250 QTY"
    },
    {
        img: townhouses,
        title: "Townhouses",
        quantity: "120 QTY"
    },
    {
        img: condos,
        title: "Condominiums",
        quantity: "180 QTY"
    },
    {
        img: mansions,
        title: "Mansions",
        quantity: "45 QTY"
    },
    {
        img: cottages,
        title: "Cottages",
        quantity: "20 QTY"
    },
    {
        img: farms,
        title: "Farmhouses",
        quantity: "15 QTY"
    }
];
    return (
        <section className="types-section">
             <header className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                <div className="breadcrumb">
                    Types ❖
                </div>
                <h3 id="hero-heading" className="hero-title__types">
                    Property Types
                </h3>
                <p id="hero-subheading" className="hero-subtitle__types">
                    Browse a wide variety of property types -- from modern apartments to 
                    spacious estates--we provide everything that's accommodating for your lifestyle.
                </p>
                </motion.div>
            </header>
            <motion.div
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6, ease: "easeOut"}}
                viewport={{ once: true }}
            >
            <section className="types-display-container">
                {types.map((t, idx) => (
                    <article key={idx} className="types-cards">
                        <img src={t.img} className="card-img" alt={`Picture of ${t.title}`} loading="lazy"/>
                        <h4 className="card-title">{t.title}</h4>
                        <small className="card-qty">{t.quantity}</small>
                    </article>
                ))}
            </section>
            </motion.div>
        </section>
    )
}

export default Types