import { useState } from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import {
  ProjectsCardContainer,
  ProjectsCardTitle,
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
      <ProjectsCardTitle>Projects</ProjectsCardTitle>
      <ProjectSlider
        id="project-slider"
        role="link"
        aria-label={projects[currentProjectIndex].title}
        href={projects[currentProjectIndex].website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectSliderLeftSide>
          <StyledImage
            src={projects[currentProjectIndex].projectImg}
            alt={projects[currentProjectIndex].title}
            width={256}
            height={256}
          />
        </ProjectSliderLeftSide>
        <ProjectSliderRightSide>
          <ProjectTitle>{projects[currentProjectIndex].title}</ProjectTitle>
          <ProjectStatus aria-label="Project status">
            {projects[currentProjectIndex].status}
          </ProjectStatus>
          <ProjectDescription>
            {projects[currentProjectIndex].description}
          </ProjectDescription>
          <ProjectStack aria-label="Project stack">
            {projects[currentProjectIndex].stack.map((stack) => (
              <ProjectStackItem key={stack}>{stack}</ProjectStackItem>
            ))}
          </ProjectStack>
        </ProjectSliderRightSide>
      </ProjectSlider>
      <ProjectLeftArrowContainer
        role="button"
        aria-label="Previous project"
        onClick={previousProject}
      >
        <BsChevronCompactLeft />
      </ProjectLeftArrowContainer>
      <ProjectRightArrowContainer
        role="button"
        aria-label="Next project"
        onClick={nextProject}
      >
        <BsChevronCompactRight />
      </ProjectRightArrowContainer>
      <ProjectDotContainer>
        {projects.map((project, index) => (
          <ProjectDot
            key={index}
            role="button"
            aria-label={`Project ${index + 1}`}
            onClick={() => goToProject(index)}
            active={index === currentProjectIndex}
          >
            <BsDot />
          </ProjectDot>
        ))}
      </ProjectDotContainer>
    </ProjectsCardContainer>
  );
}
