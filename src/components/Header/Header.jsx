import Navbar from '../Navbar/Navbar.jsx';

import logo from "../../assets/images/logo_wobgblack.webp";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__divider">
          <img src={logo} alt="Portal23 Logo" className="header__logo" />
          <p className="header__title">Portal 23</p>
        </div>
        <Navbar />
      </div>
    </header>
  );
}