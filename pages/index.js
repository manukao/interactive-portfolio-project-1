import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";

function HomePage() {
  return (
    <>
      <BioCard developer={developer} />
    </>
  );
}

export default HomePage;
