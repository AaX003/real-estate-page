import "../css/Showcase.css";
import { useState } from "react";

import { motion } from "framer-motion";

// IMAGES

// living room
import livingOne from "../images/livingOne.jpg";
import livingTwo from "../images/livingTwo.jpg";
import livingThree from "../images/livingThree.jpg";
import livingFour from "../images/livingRoomFour.jpg";
import livingFive from "../images/livingRoomFive.jpg";
import livingSix from "../images/livingRoomSix.jpg";

// kitchen
import kitchenOne from "../images/kitchenOne.jpg";
import kitchenTwo from "../images/kitchenTwo.jpg";
import kitchenThree from "../images/kitchenThree.jpg";
import kitchenFour from "../images/kitchenFour.jpg";
import kitchenFive from "../images/kitchenFive.jpg";
import kitchenSix from "../images/kitchenSix.jpg";

// bathroom
import bathroomOne from "../images/bathroomOne.jpg";
import bathroomTwo from "../images/bathroomTwo.jpg";
import bathroomThree from "../images/bathroomThree.jpg";
import bathroomFour from "../images/bathroomFour.jpg";
import bathroomFive from "../images/bathroomFive.jpg";
import bathroomSix from "../images/bathroomSix.jpg";

// bedroom

function Showcase() {
    const [index, setIndex] = useState(0);

    const images = [
        {
            category: "Living Room",
            attr: [
                {
                    img: livingOne,
                    caption: "Contemporary blue and beige living room concept"
                },
                {
                    img: livingTwo,
                    caption: "Modern-themed living room with tall shelving and minimalist structure"
                },
                {
                    img: livingThree,
                    caption: "Contemporary open-concept living room"
                },
                {
                    img: livingFour, 
                    caption: "" // TBA
                },
                {
                    img: livingFive, 
                    caption: "" // TBA
                },
                {
                    img: livingSix,
                    caption: "" // TBA
                }
            ]
        },
        
        {
            category: "Kitchen",
            attr: [
                {
                    img: kitchenOne,
                    caption: "Spacious open-concept kitchen with oak cabinetry"
                },
                {
                    img: kitchenTwo,
                    caption: "Spacious modern kitchen with marble, chrome, and natural lighting"
                },
                {
                    img: kitchenThree,
                    caption: "Spacious modern kitchen fit for a family of five"
                },
                {
                    img: kitchenFour,
                    caption: ""
                },
                {
                    img: kitchenFive,
                    caption: ""
                },
                {
                    img: kitchenSix,
                    caption: ""
                }
            ] 
        },
        
        {   
            category: "Bathroom", 
            attr: [
                {
                    img: bathroomOne,
                    caption: "Small modern bathroom with wood siding, counters, and slate flooring"
                },
                {
                    img: bathroomTwo,
                    caption: "Small spa-based bathroom with an oval tub, dark wood counters, and dual sinks"
                },
                {
                    img: bathroomThree,
                    caption: "Beautiful modern bathroom with a low spa-based sink, tub, glass partitions, and teal accents"
                },
                {
                    img: bathroomFour,
                    caption: ""
                },
                {
                    img: bathroomFive,
                    caption: ""
                },
                {
                    img: bathroomSix,
                    caption: ""
                }
            ],
        },
    ];

     return (
        <section className="showcase-section">
            <header className="showcase-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                <div className="breadcrumb">
                    Highlights ❖
                </div>
                <h3 id="showcase-heading" className="showcase-title">
                    Interior Highlights
                </h3>
                <p id="showcase-subheading" className="showcase-subtitle">
                    Browse our featured listings and discover your next property
                    today!
                </p>
                </motion.div>
                
            </header>
            <div className="categorical-indicators">
                {images.map((img, i) => (
                     <button
                        key={i}
                        role="tab"
                        aria-selected={index === i}
                        aria-label={`Go to ${img.category}`}
                        className={`category-tab ${index === i ? "is-active" : ""}`}
                        onClick={() => setIndex(i)}
                    >
                        {img.category}
                    </button>
                ))}
            </div>
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6, ease: "easeOut"}}
                viewport={{ once: true }}
            >
                <section className="showcase-display-container">
                {images[index].attr.map((i, idx) => (
                    <div key={idx} className="showcase-wrapper">
                        <img src={i.img} aria-label={"Showcase Image"} loading="lazy"/>
                        <small className="showcase-caption">{i.caption}</small>
                        <span className="cta-wrapper">
                            <p className="cta-text">Like what you see?
                                <a href="#properties" className="view-properties-btn">
                                    View Properties
                                </a>
                            </p>
                        </span>
                    </div>
                ))}
            </section>
            </motion.div>
            
        </section>
    );
}

export default Showcase