"use client";
import "./style.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Accueil", path: "/" },
  { title: "À propos", path: "/about" },
  { title: "Mes Services", path: "/service" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar__nav">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          passHref
          className={
            pathname === link.path ? "activeLink nav-item" : " nav-item"
          }
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
const NavBar = () => {
  return (
    <div className="navbar-menu-container">
      <h1 className="title-website">NORBERT.DEV</h1>
      <NavMenu></NavMenu>
      <div className="copyright-section-nav">
        <span>
          Designed by
          <a href="www.google.com"> Norbert Yemuang Bope</a>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
