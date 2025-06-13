import "./Header.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo-link">
          <div className="header__logo">
            <img src={logo} alt="BreezyDrive Logo" />
            <h2>BreezyDrive</h2>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="header__nav">
          <a href="">Về BreezyDrive</a>
          <a href="">Trở thành chủ xe</a>
          <span className="header__divider"></span>
          <a href="">Đăng ký</a>
          <Link to="/login">
            <button className="header__login">Đăng nhập</button>
          </Link>{" "}
        </nav>
      </div>
    </header>
  );
}

export default Header;
