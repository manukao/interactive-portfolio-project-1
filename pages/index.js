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

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function HomePage() {
  return (
    <Container>
      <Background>
        <PanoramaViewer />
      </Background>
      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
      <TechStackCard techSkills={developer.techSkills} />
      <AgeCard ageOfDeveloper={developer.age} />
      <TestimonialsCard testimonials={developer.testimonials} />
      <GitHubCard gitHubLink={developer.socials.gitHub} />
      <LinkedInCard linkedInLink={developer.socials.linkedIn} />
      <ProjectsCard projects={developer.projects} />
      <ContactCardForm />
    </Container>
  );
}

export default HomePage;
