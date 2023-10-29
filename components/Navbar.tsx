import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import { ReactNode, useState } from "react";

interface NavbarProps {
  router: NextRouter;
}

function Navbar({ router }: NavbarProps): ReactNode {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navs = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar${mobileMenuOpen ? " mobile-open" : ""}`}>
      <div className="container">
        <div className={`hamburger-menu${mobileMenuOpen ? " active" : ""}`} onClick={toggleMobileMenu}>
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
        </div>
        <ul className={`nav-links${mobileMenuOpen ? " active" : ""}`}>
          {navs.map((nav) => (
            <li key={nav.href}>
              <Link legacyBehavior href={nav.href}>
                <a className={`nav-item ${router.pathname == nav.href ? "active" : ""}`}>
                  {nav.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
