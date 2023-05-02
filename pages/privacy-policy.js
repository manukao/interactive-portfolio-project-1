import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  max-width: 48rem;
  height: 82vh;
  max-height: 100%;
  border-radius: var(--border-radius);
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const ScrollContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--background-color);

  /* Custom scrollbar styles for WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--background-color);
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: var(--border-radius);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: var(--border-radius);
  }
  /* Custom scrollbar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--color-secondary) var(--background-color);
`;

const TextSection = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  margin-bottom: 10px;
`;

const SubtitleSmall = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  padding-bottom: 12px;
`;

const Link = styled.a`
  color: var(--color-secondary);
  text-decoration: none;
`;

export default function PrivacyPolicy() {
  return (
    <MainContainer>
      <Wrapper>
        <ScrollContainer>
          <TextSection>
            <Title>Privacy Policy</Title>
            <Subtitle>Introduction</Subtitle>
            <Text>
              At Unam, accessible from https://unamanu.vercel.app/, one of our
              main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by Unam and how we use it.
            </Text>

            <Subtitle>Log Files</Subtitle>
            <Text>
              Unam follows a standard procedure of using log files. These files
              log visitors when they visit websites. All hosting companies do
              this and a part of hosting services`` analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users`` movement on the
              website, and gathering demographic information.
            </Text>

            <Subtitle>Privacy Policies</Subtitle>
            <Text>
              You may consult this list to find the Privacy Policy for
            </Text>
            <Text>
              Our website does not use cookies to store your browsing history,
              and we do not collect any personal information from our visitors
              unless they explicitly provide it to us via email or through our
              contact form.
            </Text>
            <Text>
              If you choose to provide us with your personal information, we
              will only use it for the purpose for which it was provided. We do
              not share or sell your personal information to any third-party
              companies.
            </Text>
            <Text>
              Our website may contain links to other websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party`s site. We strongly advise you to
              review the Privacy Policy of every site you visit.
            </Text>
            <Text>
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </Text>
            <SubtitleSmall>Children`s Information</SubtitleSmall>
            <Text>
              Our website does not address anyone under the age of 18. We do not
              knowingly collect personal identifiable information from children
              under 18. In the case we discover that a child under 18 has
              provided us with personal information, we immediately delete this
              from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </Text>
            <SubtitleSmall>Changes to This Privacy Policy</SubtitleSmall>
            <Text>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </Text>
            <Text>
              We advise you to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Text>
            <SubtitleSmall>Contact Us</SubtitleSmall>
            <Text>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{" "}
              <Link href="mailto:manuelsko@live.de">manuelsko@live.de</Link>.
            </Text>
          </TextSection>
        </ScrollContainer>
      </Wrapper>
    </MainContainer>
  );
}
