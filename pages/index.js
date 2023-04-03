import developer from "../components/developer";
import BioCard from "../components/BioCard/BioCard.js";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const BigCard = styled.div`
  grid-row: span 2;
  grid-column: span 2;
`;

function HomePage() {
  return (
    <GridContainer>
      <BigCard>
        <BioCard developer={developer} />
      </BigCard>
    </GridContainer>
  );
}

export default HomePage;
