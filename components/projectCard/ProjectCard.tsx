import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import "./style.scss";
type Props = {
  imageCover: string;
};
function ProjectCard({ imageCover }: Props) {
  return (
    <div className="project__card">
      <Image src={imageCover} alt="" width={100} height={100} />
      <div className="box-btn">
        <Button title="voir le projet" classStyle="btn-white" />
      </div>
    </div>
  );
}

export default ProjectCard;
