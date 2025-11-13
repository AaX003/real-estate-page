import "../css/FAQ.css";

import { motion } from "framer-motion";

function FAQ() {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <header className="faq-hero">
        <motion.div
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6, ease: "easeOut"}}
            viewport={{ once: true }}
        >
        <div className="faq-breadcrumb">
            FAQ ❖
        </div>
        <h2 id="faq-heading" className="faq-title">
            Have a Question? 
        </h2>
        <p id="faq-subheading" className="faq-subtitle">
            Find all the answers to our customers' most 
            frequently asked questions.
        </p>
        </motion.div>
      </header>

      <div className="accordion-container">
        <details className="accordion-list">
          <summary className="accordion-header">
            What types of properties does Opal Homes specialize in?
          </summary>
          <p className="accordion-info">
            OpalHomes specializes in various properties, ranging from residential 
            to luxury and rentals. Feel free to explore our <a href="#types" className="accent">Property Types </a>
            page for more information!
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Does Opal Homes assist with buying and selling homes?
          </summary>
          <p className="accordion-info">
           Yes! OpalHomes provides assistance specific to buying and selling properties. Feel 
           free to contact us with your service and a specialist will assist you accordingly!
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                How can I schedule a property viewing or virtual tour?
            </summary>
          <p className="accordion-info">
            You can schedule an in-person viewing by contacting your assigned agent and choosing a date and time that works for you. 
            For virtual tours, select the <span className="accent">View Home Virtually</span> option on your property of choice or ask your agent to host a live video tour via Zoom or a similar platform. 
            If you run into any issues while booking, please reach out to our support team for assistance.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                What are the typical costs or fees involved in buying through Opal Homes?
            </summary>
            <p className="accordion-info">
                While it varies depending upon your selection, a property listing on OpalHomes 
                cost approximately $150,000-$400,000 dollars 
                (U.S Currency--please use our <a href="#!" className="accent">Currency Converter</a> for a conversion that's native to you)!
            </p>
            
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Do you work with first-time home buyers?
          </summary>
          <p className="accordion-info">
            Absolutely! OpalHomes' financial team will guide you through
            the process sequentially to ensure your understanding before 
            proceeding with other technicalities. 
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            How do I get pre-approved for a mortgage?
          </summary>
          <p className="accordion-info">
            To get on our waitlist for a pre-approved mortgage plan, 
            please refer to our <a href="#!" className="accent">How To Get A Pre-Approved Mortgage Plan </a>
            and read the documentation carefully. If any questions arise, please contact <a href="#contact" className="accent">Support</a>.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                Are your listings updated regularly?
            </summary>
          <p className="accordion-info">
            Yes! Property listings are updated regularly and 
            will always contain accurate, current information that is 
            both relevant to you and the property itself.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            What should I look for when comparing properties?
            </summary>
          <p className="accordion-info">
            Read the property's description carefully and ensure
            it meets your housing needs. 
          </p>
        </details>

        <details className="accordion-list">
            <summary className="accordion-header">
                Can I list my home with Opal Homes?
            </summary>
            <p className="accordion-info">
                Yes! If you have a home you would like to sell, contact Support 
                or refer to <a href="#!" className="accent">I Have a Property Listing</a> and read the documentation
                carefully. If you need assistance, contact <a href="#contact" className="accent">Support</a>. 
            </p>
        </details>

        <details className="accordion-list">
            <summary className="accordion-header">
                What makes Opal Homes different from other real estate companies?
            </summary>
            <p className="accordion-info">
                OpalHomes follows a structured and transparent policy to ensure all housing
                displays provide our users with current and readable information for comprehension.
                We ensure, especially those with specific impairments, are provided with the accessibility
                needed to browse and use our services. If a problem arises, please contact <a href="#contact" className="accent">Support</a>.
            </p>
        </details>
      </div>
        <p className="tooltip-msg__faq">
          Still have questions? Feel free to reach out to our support team.
          We're always here to help when available.
          Contact <a href="#contact" className="accent">Support</a>{" "}Team
        </p>
    </section>
  );
}

export default FAQ;
