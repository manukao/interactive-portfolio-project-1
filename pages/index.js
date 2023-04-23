import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import AgeCard from "../components/AgeCard/AgeCard";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import ContactCardForm from "../components/ContactCard/ContactCardForm";
import PanoramaViewer from "../components/Three/PanoramaBackground";
import styled from "styled-components";
import Unam3d from "../components/Three/unam3d";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
`;

const MainBox = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  max-width: 64rem;
  height: 25vh;
  max-height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const ScrollContainer = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  box-sizing: content-box;
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;

  /* Custom scrollbar styles for WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--background-color);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 0.1rem;
  }
  /* Custom scrollbar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.1);
`;

const CardSection = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  background-color: var(--background-color);
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function HomePage() {
  return (
    <>
      <HomePageContainer>
        <Background>
          <PanoramaViewer />
        </Background>
        <Unam3d />
        <MainBox>
          <ScrollContainer>
            <CardSection>
              <BioCard developer={developer} />
            </CardSection>
            <CardSection>
              <TechStackCard techSkills={developer.techSkills} />
            </CardSection>
            <CardSection>
              <CardWrapper>
                <LocationCard location={developer.location} />
              </CardWrapper>
            </CardSection>
            <CardSection>
              <CardWrapper>
                <AgeCard ageOfDeveloper={developer.age} />
              </CardWrapper>
            </CardSection>
            <CardSection>
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection>
              <TestimonialsCard testimonials={developer.testimonials} />
            </CardSection>
            <CardSection id="contact">
              <ContactCardForm id="contact-form" />
            </CardSection>
          </ScrollContainer>
        </MainBox>
      </HomePageContainer>
    </>
  );
}
