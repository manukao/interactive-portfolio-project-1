import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";
import AgeCard from "../components/AgeCard/AgeCard";
import GitHubCard from "../components/GitHubCard/GitHubCard";

function HomePage() {
  return (
    <>
      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
      <TechStackCard techSkills={developer.techSkills} />
      <AgeCard ageOfDeveloper={developer.age} />
      <GitHubCard gitHubLink={developer.socials.gitHub} />
    </>
  );
}

export default HomePage;
