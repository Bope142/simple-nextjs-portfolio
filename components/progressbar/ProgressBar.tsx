import "./style.scss";
type Props = {
  title: String;
  value: Number;
};

export default function ProgressBar({ title, value }: Props) {
  return (
    <div className="progressbar__container">
      <div className="progessbar__infos">
        <p className="title">{title}</p>
        <p className="value">{value.toString()}%</p>
      </div>
      <div className="progressbar">
        <div className="progession" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
