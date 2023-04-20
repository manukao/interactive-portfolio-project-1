import { RiLinkedinBoxLine } from "react-icons/ri";
import styled from "styled-components";

const LinkedInCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkedInLinkIcon = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.8;
`;

export default function LinkedInCard({ linkedInLink }) {
  return (
    <LinkedInCardContainer>
      <LinkedInLinkIcon
        href={linkedInLink}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="linkedin-link"
      >
        <RiLinkedinBoxLine size={18} />
      </LinkedInLinkIcon>
    </LinkedInCardContainer>
  );
}
