import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <img src='' alt="BreezyDrive Logo" />
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <a href="#">Về BreezyDrive</a>
          <a href="#">Trở thành chủ xe</a>
          <span className="header__divider"></span>
          <a href="#">Đăng ký</a>
          <button className="header__login">Đăng nhập</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
