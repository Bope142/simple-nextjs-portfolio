import "./style.scss";

export default function TitleBox({ title }: { title: string }) {
  return <span className="title-box">{title}</span>;
}
