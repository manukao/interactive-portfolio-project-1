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
import {
  MainContainer,
  MainBox,
  ScrollContainer,
  CardSection,
  CardWrapper,
} from "../components/IndexStyles/IndexStyles";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Unam</title>
        <meta
          name="description"
          content="Hi, I am Manu - Web dev adventurer on a mission to create meaningful digital experiences. Check out my portfolio and get in touch!"
        />
      </Head>
      <PanoramaViewer />
      <MainContainer>
        <MemojiScene />
        <MainBox>
          <ScrollContainer>
            <CardSection id="about">
              <BioCard developer={developer} />
            </CardSection>
            <CardSection id="skills">
              <TechStackCard techSkills={developer.techSkills} />
            </CardSection>
            <CardSection id="location">
              <LocationCard location={developer.location} />
            </CardSection>
            <CardSection id="age">
              <CardWrapper>
                <AgeCard ageOfDeveloper={developer.age} />
              </CardWrapper>
            </CardSection>
            <CardSection id="projects">
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection id="testimonials">
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
