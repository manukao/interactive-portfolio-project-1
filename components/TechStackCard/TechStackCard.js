import styled from "styled-components";

const TechStackCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid gray;
  padding: 1rem;
  margin: 4px;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const TechStackCardList = styled.ul`
  padding: 0;
`;

const TechStackCardItem = styled.li`
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background-color: lightgray;
  border-radius: 16px;
`;

export default function TechStackCard({ techSkills }) {
  return (
    <TechStackCardContainer>
      <TechStackCardList>
        {techSkills.map((skill, index) => (
          <TechStackCardItem key={index} data-testid="tech-skill">
            {skill}
          </TechStackCardItem>
        ))}
      </TechStackCardList>
    </TechStackCardContainer>
  );
}
