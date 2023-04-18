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

function HomePage() {
  return (
    <>
      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
      <TechStackCard techSkills={developer.techSkills} />
      <AgeCard ageOfDeveloper={developer.age} />
      <TestimonialsCard testimonials={developer.testimonials} />
      <GitHubCard gitHubLink={developer.socials.gitHub} />
      <LinkedInCard linkedInLink={developer.socials.linkedIn} />
      <ProjectsCard projects={developer.projects} />
      <ContactCardForm />
    </>
  );
}

export default HomePage;
