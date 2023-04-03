import styled from "styled-components";
import Image from "next/image";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  padding: 16px;
  margin: 16px;
`;

export default function BioCard({ developer }) {
  return (
    <CardContainer>
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
      <ul>
        {developer.infoTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </CardContainer>
  );
}
