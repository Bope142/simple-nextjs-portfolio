import "./style.scss";

interface Props {
  cardNumber: string;
  title: string;
  overview: string;
}

export default function CardService({ cardNumber, title, overview }: Props) {
  return (
    <div className="card__service">
      <div className="content">
        <div className="card__number">{cardNumber}</div>
        <span className="card__title">{title}</span>
        <p className="card__overview">{overview}</p>
        <div className="link-readmore">
          <a href="#" className="link-readmore-service">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
