import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine } from "react-icons/ri";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: xx-small;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const FooterLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FooterLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const FooterLinkCTA = styled.a`
  color: var(--color-secondary);
  text-decoration: underline;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const FooterIcon = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default function Footer({ gitHubLink, linkedInLink }) {
  return (
    <FooterContainer>
      <FooterLinkContainer>
        <FooterLink
          href=""
          target="_blank"
          rel="noopener noreferrer"
          data-testid=""
        >
          Legal
        </FooterLink>
        <FooterLink
          href=""
          target="_blank"
          rel="noopener noreferrer"
          data-testid=""
        >
          Privacy
        </FooterLink>
        <FooterLinkCTA href="#contact" data-testid="">
          Message me<span> 💬</span>
        </FooterLinkCTA>
      </FooterLinkContainer>
      <FooterIconContainer>
        <FooterIcon
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-link"
        >
          <VscGithub size={16} />
        </FooterIcon>
        <FooterIcon
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-link"
        >
          <RiLinkedinBoxLine size={18} />
        </FooterIcon>
      </FooterIconContainer>
    </FooterContainer>
  );
}
