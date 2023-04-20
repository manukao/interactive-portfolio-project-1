import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import AgeCard from "../components/AgeCard/AgeCard";
import GitHubCard from "../components/GitHubCard/GitHubCard";
import LinkedInCard from "../components/LinkedInCard/LinkedInCard";
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import TestimonialsCard from "../components/TestimonialsCard/TestimonialsCard";
import ContactCardForm from "../components/ContactCard/ContactCardForm";
import PanoramaViewer from "../components/Three/PanoramaBackground";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
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
  bottom: 12px;
  width: 100%;
  max-width: 64rem;
  height: 240px;
  max-height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  opacity: 0.8;
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
`;

const CardSection = styled.section`
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  padding: 4px 4px;
  background-color: #f5f5f5;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function HomePage() {
  return (
    <>
      <HomePageContainer>
        <Background>
          <PanoramaViewer />
        </Background>
        <MainBox>
          <ScrollContainer>
            <CardSection>
              <BioCard developer={developer} />
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
              <TechStackCard techSkills={developer.techSkills} />
            </CardSection>
            <CardSection>
              <ProjectsCard projects={developer.projects} />
            </CardSection>
            <CardSection>
              <ContactCardForm />
            </CardSection>
          </ScrollContainer>
        </MainBox>
      </HomePageContainer>
    </>
  );
}

export default HomePage;

/*

      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
      <TechStackCard techSkills={developer.techSkills} />
      <AgeCard ageOfDeveloper={developer.age} />
      <TestimonialsCard testimonials={developer.testimonials} />
      <GitHubCard gitHubLink={developer.socials.gitHub} />
      <LinkedInCard linkedInLink={developer.socials.linkedIn} />
      <ProjectsCard projects={developer.projects} />
      <ContactCardForm />
*/
