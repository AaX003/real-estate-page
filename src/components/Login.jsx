import { Link } from "react-router"; // routing navigation
import "../css/Login.css";

function Login() {
  return (
    <section className="login-section">
      <section className="form-container">
        <form className="form">
          <header className="form-header">
            <h3 className="header">Log into your account</h3>
          </header>
          <label 
                htmlFor="email" 
                className="email-label">Email</label>
          <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                required
            />

            <label 
                htmlFor="password" 
                className="password-label">Password</label>
            <input 
                id="password"
                type="password"
                placeholder="Enter your Password"
                required
                minLength={8}
            />
            <span className="forgot-pass-link-wrapper">
              <p className="pass-msg">
               Forgot your password? Reset <Link to="/forgotpass" className="link">here</Link>
              </p>
            </span>
            <button className="submit-btn" type="submit">Log In</button>
            <span className="link-wrapper">
              <p className="msg">
                Need an account? <Link to="/register" className="link">Register</Link> here
              </p>
            </span>
            <Link to="/" className="back-to-home-btn">Back</Link>
            
        </form>
      </section>
    </section>
  );
}

export default Login;
