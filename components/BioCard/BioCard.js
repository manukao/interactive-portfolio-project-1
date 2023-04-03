import styled from "styled-components";
import Image from "next/image";

const BioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
  margin: 4px;
`;

const InfoTagList = styled.ul`
  padding: 0;
`;

const InfoTag = styled.li`
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background-color: lightgray;
  border-radius: 16px;
`;

export default function BioCard({ developer }) {
  return (
    <BioCardContainer>
      <Image
        src={developer.avatar}
        alt={developer.name}
        width={96}
        height={96}
      />
      <p>
        Hi, I am {developer.name}
        {developer.infoText}
      </p>
      <InfoTagList>
        {developer.infoTags.map((tag) => (
          <InfoTag key={tag}>{tag}</InfoTag>
        ))}
      </InfoTagList>
    </BioCardContainer>
  );
}
