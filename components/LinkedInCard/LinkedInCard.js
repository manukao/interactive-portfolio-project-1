import { RiLinkedinBoxLine } from "react-icons/ri";
import styled from "styled-components";

const LinkedInCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  padding: 1rem;
  margin: 4px;
`;

const LinkedInLinkIcon = styled.a`
  color: inherit;
  text-decoration: none;
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
        <RiLinkedinBoxLine size={120} />
      </LinkedInLinkIcon>
    </LinkedInCardContainer>
  );
}
