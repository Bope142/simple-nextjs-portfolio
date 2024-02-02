import PageTitle from "@/components/pageTitle/PageTitle";
import "../../public/style/main.scss";
import "./style.scss";
import Button from "@/components/button/Button";
import TitleBox from "@/components/titleBox/TitleBox";
import CardService from "@/components/serviceCard/CardService";
import PricingCard from "@/components/pricingCard/PricingCard";

const SectionService = () => {
  interface Service {
    cardNumber: string;
    title: string;
    overview: string;
  }

  const services: Service[] = [
    {
      cardNumber: "01",
      title: "Développement Web",
      overview:
        "Conception et développement de sites web modernes et fonctionnels.",
    },
    {
      cardNumber: "02",
      title: "UI/UX Design",
      overview:
        "Création d'interfaces utilisateur attrayantes et intuitives pour une expérience utilisateur optimale.",
    },
    {
      cardNumber: "03",
      title: "Développement Mobile",
      overview:
        "Conception et développement d'applications mobiles pour les plateformes iOS et Android.",
    },
    {
      cardNumber: "04",
      title: "Administration Réseaux",
      overview:
        "Gestion et maintenance des infrastructures réseau pour assurer une connectivité fiable.",
    },
    {
      cardNumber: "05",
      title: "Télécommunications",
      overview:
        "Mise en place et configuration des systèmes de télécommunication pour une communication efficace.",
    },
    {
      cardNumber: "06",
      title: "Développement Frontend",
      overview:
        "Implémentation de l'interface utilisateur et de l'expérience utilisateur avec les dernières technologies frontend.",
    },
  ];
  return (
    <section className="section-page section-service">
      {services.map((service, index) => (
        <CardService
          key={index}
          cardNumber={service.cardNumber}
          title={service.title}
          overview={service.overview}
        />
      ))}
    </section>
  );
};

const SectionContact = () => {
  return (
    <section className="section-page service__contact">
      <p>
        Obtenez une consultation gratuite <br /> pour le prochain projet
      </p>
      <Button title="Contacter maintenant" classStyle="btn-white" />
    </section>
  );
};

const SectionServicePricing = () => {
  return (
    <section className="section-page service__pricing">
      <TitleBox title="Pricing" />
      <div className="content__pricing">
        <PricingCard price="0" typePrice="Free" isPopular={false} />
        <PricingCard price="35" typePrice="Basic" isPopular={false} />
        <PricingCard price="54" typePrice="Premium" isPopular={true} />
      </div>
    </section>
  );
};
export default function ServicePage() {
  return (
    <main className="page-view" id="ServicePage">
      <PageTitle
        currentPage={"Services"}
        pageTitle={"Mes Services"}
      ></PageTitle>
      <section className="content-page">
        <SectionService />
        <SectionContact />
        <SectionServicePricing />
      </section>
    </main>
  );
}
