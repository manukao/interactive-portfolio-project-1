import { VscGithub } from "react-icons/vsc";
import styled from "styled-components";

const GitHubCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GitHubLinkIcon = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.8;
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
        <VscGithub size={16} />
      </GitHubLinkIcon>
    </GitHubCardContainer>
  );
}
