import styled from "styled-components";

const TechStackCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TechStackCardList = styled.ul`
  padding: 0;
`;

const TechStackCardItem = styled.li`
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background-color: var(--bg-secondary-color);
  border-radius: 0.25rem;
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
