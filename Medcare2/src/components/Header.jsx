import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">MedCare</Link>

      <nav className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
