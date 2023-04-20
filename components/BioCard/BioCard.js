import styled from "styled-components";
import Image from "next/image";

const BioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const BioCardText = styled.div`
  font-size: small;
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
        width={100}
        height={100}
      />
      <BioCardText>
        Hi, I am {developer.name}. {developer.infoText}
      </BioCardText>
      <InfoTagList>
        {developer.infoTags.map((tag) => (
          <InfoTag key={tag}>{tag}</InfoTag>
        ))}
      </InfoTagList>
    </BioCardContainer>
  );
}
