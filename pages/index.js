import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";
import TechStackCard from "../components/TechStackCard/TechStackCard";

function HomePage() {
  return (
    <>
      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
      <TechStackCard techSkills={developer.techSkills} />
    </>
  );
}

export default HomePage;
