import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import "./style.scss";
const PageTitle = ({
  currentPage,
  pageTitle,
}: {
  currentPage: String;
  pageTitle: String;
}) => {
  return (
    <div className="page__header__container">
      <div className="path-url">
        <Link href={"/"} className="link-home">
          Accueil
        </Link>
        <FaChevronRight className="icons" />
        <p className="current-page">{currentPage}</p>
      </div>
      <span className="page-title">{pageTitle}</span>
    </div>
  );
};

export default PageTitle;
