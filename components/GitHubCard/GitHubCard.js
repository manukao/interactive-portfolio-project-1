import { VscGithub } from "react-icons/vsc";
import styled from "styled-components";

const GitHubCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
  margin: 4px;
`;

const GitHubLinkIcon = styled.a`
  color: inherit;
  text-decoration: none;
`;

export default function GitHubCard({ gitHubLink }) {
  return (
    <GitHubCardContainer>
      <GitHubLinkIcon
        href={gitHubLink}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="github-link"
      >
        <VscGithub size={100} />
      </GitHubLinkIcon>
    </GitHubCardContainer>
  );
}
