import Link from "next/link";
import { WrapperImage } from "../../../../../styles/globals";
import { DescribeProject, MyProject, ProjectName } from "./style";
import Tilt from "react-parallax-tilt";

export interface ProjectProps {
  nameProject: string;
  describe: string;
  image: string;
  className: string;
  linkProject: string;
}

const BlockProject = ({
  nameProject,
  describe,
  image,
  className,
  linkProject,
}: ProjectProps) => {


  return (
    <MyProject className={className}>
      <WrapperImage width={50}>
        <Tilt>
          <img src={image} />
        </Tilt>
      </WrapperImage>
      <DescribeProject>
        <ProjectName>{nameProject}</ProjectName>
        <p>{describe}</p>
        <Link href={linkProject}><a target="_blank">View Project</a></Link>
      </DescribeProject>
    </MyProject >
  );
};

export default BlockProject;
