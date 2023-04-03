import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";

function HomePage() {
  return (
    <div>
      <BioCard developer={developer} />
    </div>
  );
}

export default HomePage;
