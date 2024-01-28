import "./style.scss";
import React from "react";
import { typesDataTimeLine } from "@/types/timeline";

type Props = {
  data: typesDataTimeLine[];
};

const ItemsTimeLine = ({
  date_start,
  date_end,
  title,
  description,
}: typesDataTimeLine) => {
  return (
    <div className="items-timeline">
      <div className="date__infos">
        {date_start} - {date_end}
      </div>
      <div className="infos__item">
        <p className="title">{title}</p>
        <p className="description-items">{description}</p>
      </div>
    </div>
  );
};

export default function TimeLine({ data }: Props) {
  return (
    <div className="timeline__container">
      {data.map((data, index) => (
        <ItemsTimeLine
          key={index}
          date_start={data.date_start}
          date_end={data.date_end}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}
