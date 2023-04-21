import styled from "styled-components";
import Image from "next/image";

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;

export const ProjectSlider = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProjectSliderLeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ProjectSliderRightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
`;

export const ProjectStatus = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  display: inline-block;
  font-size: 0.75rem;
  padding: 2px 4px;
  margin: 2px;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const ProjectDescription = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

export const ProjectStackItem = styled.div`
  display: inline-block;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
  height: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 0.5rem;
`;

export const ProjectLeftArrowContainer = styled.div`
  position: absolute;
  top: 90%;
  left: 4px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--border-radius);
  background-color: var(--bg-secondary-color);
  cursor: pointer;
`;

export const ProjectRightArrowContainer = styled.div`
  position: absolute;
  top: 90%;
  right: 4px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--border-radius);
  background-color: var(--bg-secondary-color);
  cursor: pointer;
`;

export const ProjectDotContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectDot = styled.div`
  cursor: pointer;
`;
