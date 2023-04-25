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
import Head from "next/head";
import Unam3d from "../components/Three/unam3d";

const MainBox = styled.div`
  position: fixed;
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
            <ContactCardForm />
          </CardSection>
        </ScrollContainer>
      </MainBox>
    </>
  );
}
