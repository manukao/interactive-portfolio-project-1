import developer from "../components/developer";
import Head from "next/head";
import PanoramaViewer from "../components/Three/scenes/PanoramaBackground";
import MemojiScene from "../components/Three/scenes/MemojiScene";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import AgeCard from "../components/AgeCard/AgeCard";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import ContactCardForm from "../components/ContactCard/ContactCardForm";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MemojiCanvas = styled.div`
  z-index: 1;
  height: 18vh;
  width: 15vh;
  max-height: 100%;
  border-radius: var(--border-radius);
  position: fixed;
  bottom: 32vh;
  overflow: hidden;
`;

const MainBox = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  max-width: 48rem;
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
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--background-color);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 0.25rem;
  }
  /* Custom scrollbar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-secondary) var(--background-color);
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
      <Head>
        <title>Unam</title>
        <meta
          name="description"
          content="Hi, I am Manu - Web dev adventurer and dad with a passion for all things tech. Check out my portfolio and get in touch!"
        />
      </Head>
      <PanoramaViewer />
      <MainContainer>
        <MemojiCanvas>
          <MemojiScene />
        </MemojiCanvas>
        <MainBox>
          <ScrollContainer>
            <CardSection id="about">
              <BioCard developer={developer} />
            </CardSection>
            <CardSection id="skills">
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
            <CardSection id="projects">
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection>
              <TestimonialsCard testimonials={developer.testimonials} />
            </CardSection>
            <CardSection id="contact">
              <ContactCardForm />
            </CardSection>
          </ScrollContainer>
        </MainBox>
      </MainContainer>
    </>
  );
}
