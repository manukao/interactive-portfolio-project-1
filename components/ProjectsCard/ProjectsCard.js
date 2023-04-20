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
  ProjectSliderLeftSide,
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
        data-testid="project-website"
        href={projects[currentProjectIndex].website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectSliderLeftSide>
          <StyledImage
            src={projects[currentProjectIndex].projectImg}
            alt={projects[currentProjectIndex].title}
            data-testid="project-image"
            layout="responsive"
            width={100}
            height={100}
          />
        </ProjectSliderLeftSide>
        <ProjectSliderRightSide>
          <ProjectTitle data-testid="project-title">
            {projects[currentProjectIndex].title}
          </ProjectTitle>
          <ProjectStatus data-testid="project-status">
            {projects[currentProjectIndex].status}
          </ProjectStatus>
          <ProjectDescription data-testid="project-description">
            {projects[currentProjectIndex].description}
          </ProjectDescription>
          <ProjectStack data-testid="project-stack">
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
