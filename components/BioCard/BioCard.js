import styled from "styled-components";
import Image from "next/image";

const BioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  text-align: center;
  padding: 4px 4px;
`;

const BioCardAvatar = styled(Image)`
  width: auto;
  height: 70px;
`;

const BioCardText = styled.div``;

const InfoTagList = styled.ul`
  padding: 0;
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
      <BioCardAvatar
        src={developer.avatar}
        alt={developer.name}
        width={512}
        height={512}
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
