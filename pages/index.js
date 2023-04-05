import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import LocationCard from "../components/LocationCard/LocationCard";

function HomePage() {
  return (
    <>
      <BioCard developer={developer} />
      <LocationCard location={developer.location} />
    </>
  );
}

export default HomePage;
