import styled from "styled-components";

const TechStackCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
`;

const TechStackCardList = styled.ul`
  padding: 0;
  margin: 0;
  user-select: none;
`;

const TechStackCardItem = styled.li`
  display: inline-block;
  padding: 4px 8px;
  margin: 4px;
  background-color: var(--bg-secondary-color);
  border-radius: var(--border-radius);
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
