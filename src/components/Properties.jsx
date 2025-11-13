import "../css/Properties.css";
import { useState } from "react";

import { motion } from "framer-motion";

import houseOne from "../images/houseOne.jpg";
import houseTwo from "../images/houseTwo.jpg";
import houseThree from "../images/houseThree.jpg";

import apartmentOne from "../images/apartmentOne.jpg";
import apartmentTwo from "../images/apartmentTwo.jpg";
import apartmentThree from "../images/apartmentThree.jpg";

import townhouseOne from "../images/townhouseOne.jpg";
import townhouseTwo from "../images/townhouseTwo.jpg";
import townhouseThree from "../images/townhouseThree.jpg";

function Properties() {

    const [index, setIndex] = useState(0);

    const properties = [
        // HOUSES
        {
            category: "Houses",
            attr: [
                {
                    id: "house-1",
                    img: houseOne,
                    banner: "For Rent",
                    title: "Hwai Cabana House",
                    desc: "A cozy two-bedroom bungalow with a private patio and newly renovated kitchen — perfect for couples or small families.",
                    location: "Savannah, GA",
                    items: ["2 bedrooms", "2 bathrooms", "1,350 sq ft", "1-car garage"],
                    price: "$1,650/mo"
                },
                {
                    id: "house-2",
                    img: houseTwo,
                    banner: "For Rent",
                    title: "Vue Family Home",
                    desc: "A spacious three-bedroom suburban home featuring an open living area, fenced backyard, and bright natural lighting throughout.",
                    location: "Raleigh, NC",
                    items: ["3 bedrooms", "2.5 bathrooms", "1,950 sq ft", "Backyard"],
                    price: "$2,100/mo"
                },
                {
                    id: "house-3",
                    img: houseThree,
                    banner: "For Sale",
                    title: "Havenbrook Residence",
                    desc: "A warm, inviting four-bedroom home with dual garages, a large kitchen island, and a sunlit dining space ideal for gatherings.",
                    location: "Columbus, OH",
                    items: ["4 bedrooms", "3 bathrooms", "2,400 sq ft", "2-car garage"],
                    price: "$389,000"
                }
            ]
            },
        // APARTMENTS
        {
            category: "Apartments",
            attr: [
                {
                    id: "apartment-1",
                    img: apartmentOne,
                    banner: "For Rent",
                    title: "The Mercer Loft",
                    desc: "A bright two-bedroom apartment with skyline views and an open floor plan, perfect for young professionals.",
                    location: "Brooklyn, NY",
                    items: ["2 bedrooms", "2 bathrooms", "1,100 sq ft"],
                    price: "$3,200/mo"
                },
                {
                    id: "apartment-2",
                    img: apartmentTwo,
                    banner: "For Sale",
                    title: "Luna Park Residences",
                    desc: "A modern high-rise unit offering floor-to-ceiling windows, marble counters, and a private balcony.",
                    location: "Chicago, IL",
                    items: ["3 bedrooms", "2 bathrooms", "1,350 sq ft"],
                    price: "$480,000"
                },
                {
                    id: "apartment-3",
                    img: apartmentThree,
                    banner: "For Rent",
                    title: "The Astoria Flats",
                    desc: "Spacious apartment with high ceilings, contemporary finishes, and access to a rooftop garden.",
                    location: "Los Angeles, CA",
                    items: ["2 bedrooms", "1.5 bathrooms", "950 sq ft"],
                    price: "$2,800/mo"
                }
            ]
        },
        // TOWNHOUSES
        {
            category: "Townhouses",
            attr: [
                {
                    id: "townhouse-1",
                    img: townhouseOne,
                    banner: "For Rent",
                    title: "Maple Grove Townhome",
                    desc: "A cozy modern townhouse featuring open-concept living, a private garage, and a small outdoor terrace.",
                    location: "Boston, MA",
                    items: ["2 bedrooms", "2 bathrooms", "1,400 sq ft", "1-car garage"],
                    price: "$2,300/mo"
                },
                {
                    id: "townhouse-2",
                    img: townhouseTwo,
                    banner: "For Sale",
                    title: "Oakview Residences",
                    desc: "Bright and spacious three-story townhouse with hardwood flooring, a chef’s kitchen, and rooftop deck views.",
                    location: "Dallas, TX",
                    items: ["3 bedrooms", "2.5 bathrooms", "1,900 sq ft", "2-car garage"],
                    price: "$515,000"
                },
                {
                    id: "townhouse-3",
                    img: townhouseThree,
                    banner: "For Rent",
                    title: "Cedar Lane Retreat",
                    desc: "Newly built rental townhouse in a quiet neighborhood with energy-efficient appliances and natural light throughout.",
                    location: "San Diego, CA",
                    items: ["3 bedrooms", "2 bathrooms", "1,700 sq ft"],
                    price: "$2,600/mo"
                },
            ],
        },
    ];

    return (
        <section className="properties-section">
             <header className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 0}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                <div className="breadcrumb">
                    Properties ❖
                </div>
                <h3 id="hero-heading" className="hero-title__properties">
                    Featured Properties
                </h3>
                </motion.div>
               
                <p id="hero-subheading" className="hero-subtitle__properties">
                    Discover a wide range of premium homes and investments built
                    for long-term comfort, value, and sustainability.
                </p>
            </header>
            <section className="properties-display-container">
                <div className="categorical-indicators">
                    {properties.map((property, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={index === i}
                            aria-label={`Go to ${property.category}`}
                            className={`category-tab ${index === i ? "is-active" : ""}`}
                            onClick={() => setIndex(i)}
                        >
                            {property.category}
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
                    <div className="page-navigation">
                    {properties[index].attr.map((p) => (
                        <article key={p.id} className="property-cards">
                            <span className="property-img-wrapper">
                                <img src={p.img} alt={`Property of ${p.title}`} className="property-img"/>
                            </span>
                            <span className="property-banner-wrapper" aria-label={`For ${p.banner} banner`}>
                                <strong>{p.banner}</strong>
                            </span>
                            <h4 className="property-title">{p.title}</h4>
                            <p className="property-desc">{p.desc}</p>
                            <p className="property-attr">{p.items.join(" ")}</p>
                            <small className="property-location">{p.location}</small>
                            
                           
                            <hr />
                            <small className="property-price">{p.price}</small>
                            <span className="view-property-btn-wrapper">
                                <button className="view-property-btn">View Property</button>
                            </span>   
                            {/* ADD MODAL FOR VIEW VIRTUAL TOUR LOGIC IN FUTURE */}         
                        </article>
                        
                    ))}
                </div>
                </motion.div>
                
            </section>
            
        </section>
    )
}

export default Properties