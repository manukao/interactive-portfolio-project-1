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
          <IoChatbubblesOutline size={12} />
          <FooterLinkCTAText>Message me</FooterLinkCTAText>
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
