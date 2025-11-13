import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero-section">
           <div className="img-wrapper"></div>
            <header className="hero">
                <h3 id="hero-heading" className="hero-title">
                    Invest in Your Dream Property Today!
                </h3>
                <p id="hero-subheading" className="hero-subtitle">
                    Discover stunning homes, apartments, and estates in your ideal location.  
                    Whether you’re buying, renting, or investing, 
                    OpalHomes makes finding the perfect property simple and secure.
                </p>
            </header>
            <section className="cta-btn-container">
                <a 
                    className="view-property-btn__hero"
                    href="#properties"
                >
                    View Properties
                </a>
                <a 
                    className="contact-us-btn"
                    href="#contact"
                >
                    Contact Us
                </a>
            </section>
            <section className="input-field-container">
                <select>
                    <option value="type">Service Type</option>
                    <option value="residential">Remodel</option>
                    <option value="commercial">Demolish</option>
                </select>
                <select>
                    <option value="type">Property Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="land">Land</option>
                </select>
                 <select>
                    <option value="">Select Location</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                    <option value="miami">Miami</option>
                </select>

                <select>
                    <option value="">Select Features</option>
                    <option value="pool">Pool / Spa</option>
                    <option value="garden">Garden / Outdoor Space</option>
                    <option value="garage">Attached Garage</option>
                    <option value="open-concept">Open-Concept Design</option>
                    <option value="energy-efficient">Energy-Efficient Upgrades</option>
                </select>
                <button id="search" className="search-btn" type="button">Search</button>
            </section>
        </section>
    );
}

export default Hero