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
  padding: 0 1rem;
  margin: 0;
  margin-top: 0.5rem;
  user-select: none;
`;

const InfoTag = styled.li`
  display: inline-block;
  padding: 2px 8px;
  margin: 2px;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);

  @media (min-width: 768px) {
    padding: 6px 12px;
    margin: 4px;
  }

  @media (min-width: 1024px) {
    padding: 8px 16px;
    margin: 6px;
  }
`;

export default function BioCard({ developer }) {
  return (
    <BioCardContainer
      role="article"
      aria-label={`Bio card for ${developer.name}`}
    >
      <BioCardText>
        Hi, I am{" "}
        <DeveloperName role="heading" aria-level="2">
          {developer.name}
        </DeveloperName>
        . {developer.infoText}
      </BioCardText>
      <InfoTagList role="list">
        {developer.infoTags.map((tag) => (
          <InfoTag role="listitem" key={tag}>
            {tag}
          </InfoTag>
        ))}
      </InfoTagList>
    </BioCardContainer>
  );
}
