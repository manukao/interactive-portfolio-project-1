import styled from "styled-components";

const TechStackCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
`;

const TechStackCardText = styled.div`
  user-select: none;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const TextEmphasis = styled.span`
  font-weight: bold;
  color: var(--color-secondary);
`;

const TechStackCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  user-select: none;
`;

const TechStackCardItem = styled.li`
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

export default function TechStackCard({ techSkills, cardTitle }) {
  return (
    <TechStackCardContainer>
      <TechStackCardText>
        Here are some <TextEmphasis>Tech skills</TextEmphasis> I have been
        working with and improving on lately.
      </TechStackCardText>
      <TechStackCardList>
        {techSkills.map((skill, index) => (
          <TechStackCardItem key={index} aria-label={skill}>
            {skill}
          </TechStackCardItem>
        ))}
      </TechStackCardList>
    </TechStackCardContainer>
  );
}
