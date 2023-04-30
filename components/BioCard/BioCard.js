import styled from "styled-components";

const BioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
`;

const BioCardText = styled.div`
  user-select: none;
`;

const DeveloperName = styled.span`
  font-weight: bold;
  color: var(--color-secondary);
`;

const InfoTagList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  user-select: none;
`;

const InfoTag = styled.li`
  display: inline-block;
  padding: 4px 4px;
  margin: 0 4px 0 4px;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
`;

export default function BioCard({ developer }) {
  return (
    <BioCardContainer>
      <BioCardText>
        Hi, I am <DeveloperName>{developer.name}</DeveloperName>.{" "}
        {developer.infoText}
      </BioCardText>
      <InfoTagList>
        {developer.infoTags.map((tag) => (
          <InfoTag key={tag}>{tag}</InfoTag>
        ))}
      </InfoTagList>
    </BioCardContainer>
  );
}
