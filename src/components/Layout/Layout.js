import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "../../styles/Navbar.css";
import "../../styles/footer.css";

export default function Layout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* LEFT - LOGO */}
          <div className="logo">
            <Link to="/">Bhagavad Gita</Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="menu-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <i className={`fa-solid ${isDropdownOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>

          {/* CENTER NAVIGATION */}
          <nav className={`center-nav ${isDropdownOpen ? "open" : ""}`}>
            <ul className="nav-links">

              <li className={`dropdown ${isChaptersOpen ? "active" : ""}`}>
                <button
                  type="button"
                  className="dropdown-toggle"
                  onClick={(e) => { e.stopPropagation(); setIsChaptersOpen(!isChaptersOpen); }}
                >
                  Chapters <i className="fa-solid fa-angle-down"></i>
                </button>

                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {Array.from({ length: 18 }, (_, i) => (
                      <Link key={i} to={`/chapters/${i + 1}`} onClick={() => { setIsDropdownOpen(false); setIsChaptersOpen(false); }}>
                        <i className="fa-solid fa-book"></i> Chapter {i + 1}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li><Link to="/quotes" onClick={() => setIsDropdownOpen(false)}>Quotes</Link></li>
              <li><Link to="/about" onClick={() => setIsDropdownOpen(false)}>About Gita</Link></li>
              <li><Link to="/donate" onClick={() => setIsDropdownOpen(false)}>Donate</Link></li>

            </ul>
          </nav>

          {/* RIGHT */}
          <div className="nav-right">
            <input type="text" placeholder="Search" className="search-box" />
            <i className="fa-regular fa-moon"></i>
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="flag"
              className="flag"
            />
          </div>

        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/">App</Link>
          <Link to="/gita-ai">Bhagavad Gita AI</Link>
          <Link to="/">Acknowledgements</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Blog</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/">API</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p>
          © 2025 Copyright: <span className="orange">Ved Vyas Foundation</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
}
