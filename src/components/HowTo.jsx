import "../css/HowTo.css";
import { useState } from "react";

import { motion } from "framer-motion";

function HowTo() {
    const [index, setIndex] = useState(0); 

  const steps = [
  {
    name: "1",
    items: [
      {
        num: 1,
        title: "Enter Your Zip Code",
        desc: "Start by providing your location so we can match you with agents and services available in your area.",
      },
      {
        num: 2,
        title: "Browse Local Listings",
        desc:  "Explore curated listings tailored to your budget and preferences, complete with photos, details, and agent information.",
      },
      {
        num: 3,
        title: "Search for Agent in Desired Area",
        desc: "Browse through verified local agents with strong reputations and portfolios that match your goals.",
      },
    ],
  },
  {
    name: "2",
    items: [
      {
        num: 4,
        title: "Schedule a Viewing",
        desc: "Choose a convenient time to tour your selected property—either in-person or virtually—with your assigned agent.",
      },
      {
        num: 5,
        title: "Discuss Your Needs",
        desc: "Meet with your agent to talk through pricing, financing options, and neighborhood insights to ensure the perfect fit.",
      },
      {
        num: 6,
        title: "Submit an Offer",
        desc: "Once you’ve found the right property, your agent will help you prepare and submit a competitive offer.",
      },
    ],
  },
  {
    name: "3",
    items: [
      {
        num: 7,
        title: "Complete Documentation",
        desc: "Finalize the required paperwork, including contracts, disclosures, and inspection reports, with professional guidance.",
      },
      {
        num: 8,
        title: "Secure Financing",
        desc: "Get pre-approved or finalize your mortgage through trusted lenders partnered with Opal Homes.",
      },
      {
        num: 9,
        title: "Close & Move In",
        desc: "Sign your closing documents, receive your keys, and enjoy your new property with full post-purchase support.",
      },
    ],
  },
];


    return (
        <section className="howto-section">
            <header className="howto-hero">
              <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                <div className="breadcrumb">
                  Our Process ❖
                </div>
                <h3 id="howto-heading" className="howto-title">
                    How It Works
                </h3>
                <p id="howto-subheading" className="howto-subtitle">
                    Step-by-step of how our property services work
                </p>
                </motion.div>
            </header>

            {/* Step indicators */}
            <div className="step-indicators">
                {steps.map((step, i) => (
                    <button
                        key={i}
                        role="tab"
                        aria-selected={index === i}
                        aria-label={`Go to ${step.name}`}
                        className={`step-tab ${index === i ? "is-active" : ""}`}
                        onClick={() => setIndex(i)}
                    >
                        {step.name}
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
              {/* Step cards */}
            <div className="steps-display">
                {steps[index].items.map((item, idx) => (
                    <div key={idx} className="step-card">
                        <span className="step-card-number-badge" aria-label={`Step ${item.num}`}>
                            {item.num}
                        </span>
                        <h3 className="step-card-title">{item.title}</h3>
                        <small className="step-card-desc">{item.desc}</small>
                    </div>
                ))}
            </div>
            </motion.div>
            
        </section>
    );
}

export default HowTo;