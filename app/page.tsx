import "../public/style/main.scss";
import Image from "next/image";
import profilUser from "../public/images/profil-1.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import "./home.style.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-view" id="homePageContainer">
      <div className="cover-profil">
        <Image src={profilUser} alt="ma photo de profil" />
      </div>
      <div className="profil-infos">
        <h2>NORBERT YEMUANG</h2>
        <p>
          🚀 Développeur, UI/UX designer, créateur tech 💻✨ Code & Créativité
          en fusion ! 🌐🎨
        </p>
        <div className="link-social-media">
          <Link href={""}>
            <FaFacebook />
          </Link>
          <Link href={""}>
            <FaLinkedin />
          </Link>
          <Link href={""}>
            <FaInstagramSquare />
          </Link>
          <Link href={""}>
            <FaGithub />
          </Link>
          <Link href={""}>
            <FaBehanceSquare />
          </Link>
        </div>
      </div>
    </main>
  );
}
