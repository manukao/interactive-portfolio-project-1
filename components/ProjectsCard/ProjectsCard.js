import { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import {
  ProjectsCardContainer,
  ProjectSlider,
  StyledImage,
  ProjectSliderRightSide,
  ProjectStatus,
  ProjectTitle,
  ProjectDescription,
  ProjectStack,
  ProjectStackItem,
  ProjectLeftArrowContainer,
  ProjectRightArrowContainer,
  ProjectDotContainer,
  ProjectDot,
} from "./ProjectStyles";

export default function ProjectsCard({ projects }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const addFlashClass = () => {
    document.getElementById("project-slider").classList.add("flash");
    setTimeout(() => {
      document.getElementById("project-slider").classList.remove("flash");
    }, 1000);
  };

  const previousProject = () => {
    const isFirstSlide = currentProjectIndex === 0;
    const newIndex = isFirstSlide
      ? projects.length - 1
      : currentProjectIndex - 1;
    setCurrentProjectIndex(newIndex);
    addFlashClass();
  };

  const nextProject = () => {
    const isLastSlide = currentProjectIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentProjectIndex + 1;
    setCurrentProjectIndex(newIndex);
    addFlashClass();
  };

  const goToProject = (slideIndex) => {
    setCurrentProjectIndex(slideIndex);
    addFlashClass();
  };

  return (
    <ProjectsCardContainer>
      <ProjectSlider
        id="project-slider"
        href={projects[currentProjectIndex].website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage
          src={projects[currentProjectIndex].projectImg}
          alt={projects[currentProjectIndex].name}
          width={128}
          height={128}
        />
        <ProjectSliderRightSide>
          <ProjectTitle>{projects[currentProjectIndex].title}</ProjectTitle>
          <ProjectStatus>{projects[currentProjectIndex].status}</ProjectStatus>
          <ProjectDescription>
            {projects[currentProjectIndex].description}
          </ProjectDescription>
          <ProjectStack>
            {projects[currentProjectIndex].stack.map((stack) => (
              <ProjectStackItem key={stack}>{stack}</ProjectStackItem>
            ))}
          </ProjectStack>
        </ProjectSliderRightSide>
      </ProjectSlider>
      <ProjectLeftArrowContainer onClick={previousProject}>
        <BsChevronCompactLeft />
      </ProjectLeftArrowContainer>
      <ProjectRightArrowContainer onClick={nextProject}>
        <BsChevronCompactRight />
      </ProjectRightArrowContainer>
      <ProjectDotContainer>
        {projects.map((project, index) => (
          <ProjectDot key={index} onClick={() => goToProject(index)}>
            <BsDot />
          </ProjectDot>
        ))}
      </ProjectDotContainer>
    </ProjectsCardContainer>
  );
}
