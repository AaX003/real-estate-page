import { Link } from "react-router"; // routing navigation
import "../css/Register.css";

function Register() {
    return (
        <section className="signin-section">
        <section className="form-container">
            <form className="form">
                <header className="form-header">
                    <h3 className="header">Create your account</h3>
                </header>

                <label 
                    htmlFor="name" 
                    className="name-label">Enter Name</label>
                    <input
                        id="name"
                        type="name"
                        placeholder="Create a Name"
                        required
                    />

                <label 
                    htmlFor="email" 
                    className="email-label">Create Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Create an Email"
                        required
                    />

                    <label 
                        htmlFor="password" 
                        className="password-label">Create Password</label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Create a Password"
                        required
                        minLength={8}
                    />
                    <span className="link-wrapper">
                        <p className="msg">
                            Have an account? <Link to="/login" className="link">Login</Link> here
                        </p>
                    </span>
                    <button className="submit-btn" type="submit">Sign Up</button>
                    <Link to="/" className="back-to-home-btn">Back</Link>
            </form>
        </section>
    </section>
    );
}

export default Register;