import PageTitle from "@/components/pageTitle/PageTitle";
import "../../public/style/main.scss";
import "./style.scss";
import ProjectCard from "@/components/projectCard/ProjectCard";

const ProjectSection = () => {
  return (
    <section className="section-page section__project">
      <ProjectCard imageCover="/images/project-1.jpg" />
      <ProjectCard imageCover="/images/project-2.jpg" />
      <ProjectCard imageCover="/images/project-3.jpg" />
      <ProjectCard imageCover="/images/project-4.jpg" />
      <ProjectCard imageCover="/images/project-5.jpg" />
      <ProjectCard imageCover="/images/project-6.jpg" />
    </section>
  );
};
export default function PortfolioPage() {
  return (
    <main className="page-view" id="PortfolioPage">
      <PageTitle
        currentPage={"portfolio"}
        pageTitle={"Mes Réalisations"}
      ></PageTitle>
      <section className="content-page">
        <ProjectSection />
      </section>
    </main>
  );
}
