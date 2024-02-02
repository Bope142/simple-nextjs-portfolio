import "./style.scss";
type Props = {
  title: string;
  classStyle: string;
};
export default function Button({ title, classStyle }: Props) {
  return <button className={"btn " + classStyle}>{title}</button>;
}
