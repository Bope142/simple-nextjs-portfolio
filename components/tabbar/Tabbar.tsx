"use client";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoIdCard } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { title: "Accueil", path: "/", icons: TiHome },
  { title: "À propos", path: "/about", icons: FaUser },
  { title: "Services", path: "/service", icons: MdDesignServices },
  { title: "Portfolio", path: "/portfolio", icons: IoIdCard },
  { title: "Contact", path: "/contact", icons: FaPhoneAlt },
];

function Tabbar() {
  const pathname = usePathname();
  return (
    <div className="tabbar__container">
      {navLinks.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          passHref
          className={
            pathname === item.path ? "active-menu tabbar-item" : " tabbar-item"
          }
        >
          <item.icons className="icons" /> <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Tabbar;
