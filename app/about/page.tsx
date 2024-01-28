/* eslint-disable react/no-unescaped-entities */
import PageTitle from "@/components/pageTitle/PageTitle";
import "../../public/style/main.scss";
import "./style.scss";
import Image from "next/image";
import profilUser from "../../public/images/profil-1.jpg";
import Button from "@/components/button/Button";
import TitleBox from "@/components/titleBox/TitleBox";
import ProgressBar from "@/components/progressbar/ProgressBar";
const MyInfosProfile = () => {
  return (
    <div className="my-profil">
      <div className="content-profil-pic">
        <Image src={profilUser} alt="ma photo de profil" />
      </div>
      <div className="profil-infos">
        <h3>Norbert Yemuang Bope</h3>
        <span> Développeur, UI/UX designer, créateur tech</span>
      </div>
      <p className="overview">
        👋 Salut, je suis Norbert Yemuang Bope, titulaire d'une licence en
        science informatique avec une orientation en télécommunication et
        administration réseaux , et une passion affirmée pour le développement
        et le design.
        <br />
        <br />
        💻🚀 Développeur polyvalent et créateur tech, je marie la puissance du
        code à l'esthétique de l'UI/UX pour donner vie à des solutions
        innovantes. Mon bagage académique solide m'a armé d'une compréhension
        approfondie des technologies de l'information, tandis que mon expérience
        pratique m'a permis de perfectionner mes compétences en développement.
      </p>
      <Button title="Télécharger mon CV" classStyle="btn-black" />
    </div>
  );
};
const SkillsSections = () => {
  const skillsData = [
    { title: "Développement Web", value: 90 },
    { title: "UI/UX Design", value: 85 },
    { title: "Développement Mobile", value: 80 },
    { title: "Administration Réseaux", value: 75 },
    { title: "Télécommunications", value: 70 },
    { title: "Algorithmes et Structures de Données", value: 85 },
    { title: "Développement Backend", value: 85 },
    { title: "Développement Frontend", value: 90 },
    { title: "Bases de Données", value: 80 },
    { title: "Sécurité Informatique", value: 75 },
  ];
  return (
    <section className="skills__section">
      <div className="programming__skills">
        <TitleBox title="Compétences Informatique" />
        <div className="skills__hard">
          {skillsData.map((skill, index) => (
            <ProgressBar key={index} title={skill.title} value={skill.value} />
          ))}
        </div>
      </div>
      <div className="language__skills">
        <TitleBox title="Compétences linguistiques" />
        <div className="skills__soft">
          <ProgressBar title={"Français"} value={95} />
          <ProgressBar title={"Anglais"} value={45} />
          <ProgressBar title={"Lingala"} value={45} />
        </div>
      </div>
    </section>
  );
};
export default function AboutPage() {
  return (
    <main className="page-view" id="AboutPage">
      <PageTitle
        currentPage={"Apropos"}
        pageTitle={"À propos de moi"}
      ></PageTitle>
      <section className="content-page">
        <MyInfosProfile />
        <SkillsSections />
      </section>
    </main>
  );
}
