import { Link } from "react-router"; // routing navigation
import "../css/ForgotPass.css";

function ForgotPass() {

    return (
        <section className="forgot-pass-section">
        <section className="form-container">
            <form className="form">
                <header className="form-header">
                    <h3 className="header">Create a new password</h3>
                </header>

                    <label 
                        htmlFor="password" 
                        className="password-label">Create Password</label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Create a Password"
                        required
                        maxLength={30}
                    />

                    <label 
                        htmlFor="password" 
                        className="password-label">Create Password</label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Create a Password"
                        required
                        maxLength={30}
                    />
                    <button className="submit-btn" type="submit">Confirm</button>
                    <Link to="/" className="back-to-home-btn">Back</Link>
            </form>
        </section>
    </section>
    );
}

export default ForgotPass;