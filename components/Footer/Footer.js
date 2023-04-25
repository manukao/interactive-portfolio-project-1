import { VscGithub } from "react-icons/vsc";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  color: black;
  position: absolute;
  bottom: 0.5rem;
  width: 100vw;
  font-size: x-small;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const FooterLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
`;

const FooterLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    color: var(--color-secondary);
    opacity: 1;
  }
`;

const FooterLinkCTA = styled.a`
  color: var(--color-secondary);
  display: flex;
  font-weight: bold;
  gap: 0.1rem;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const FooterLinkCTAText = styled.div`
  text-decoration: underline;
`;

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;

const FooterIcon = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    color: var(--color-secondary);
  }
`;

export default function Footer({ gitHubLink, linkedInLink }) {
  return (
    <FooterContainer role="contentinfo">
      <FooterLinkContainer aria-label="Footer links">
        <FooterLink
          href=""
          target="_blank"
          rel="noopener noreferrer"
          data-testid=""
          aria-label="Legal information"
        >
          Legal
        </FooterLink>
        <FooterLink
          href=""
          target="_blank"
          rel="noopener noreferrer"
          data-testid=""
          aria-label="Privacy policy"
        >
          Privacy
        </FooterLink>

        <FooterLinkCTA href="#contact" data-testid="" aria-label="Message me">
          <IoChatbubblesOutline size={12} aria-hidden="true" />
          <FooterLinkCTAText>Message me</FooterLinkCTAText>
        </FooterLinkCTA>
      </FooterLinkContainer>
      <FooterIconContainer aria-label="Social media links">
        <FooterIcon
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-link"
          aria-label="Visit my GitHub profile"
        >
          <VscGithub size={16} aria-hidden="true" />
        </FooterIcon>
        <FooterIcon
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-link"
          aria-label="Visit my LinkedIn profile"
        >
          <RiLinkedinBoxLine size={18} aria-hidden="true" />
        </FooterIcon>
      </FooterIconContainer>
    </FooterContainer>
  );
}
