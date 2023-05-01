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

export default function LegalNotice() {
  return (
    <MainContainer>
      <Wrapper>
        <ScrollContainer>
          <TextSection>
            <Title>Legal Notice</Title>
            <Subtitle>Information according to § 5 TMG</Subtitle>
            <Text>Manuel Kao</Text>
            <Text>
              Email:{" "}
              <Link href="mailto:manuelsko@live.de">manuelsko@live.de</Link>
            </Text>
            <Subtitle>Website Terms and Conditions of Use</Subtitle>
            <SubtitleSmall>Terms</SubtitleSmall>
            <Text>
              By accessing this Website, accessible from
              https://unamanu.vercel.app/, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law.
            </Text>
            <SubtitleSmall>Use License</SubtitleSmall>
            <Text>
              Permission is granted to temporarily download one copy of the
              materials on Manuel`s Website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </Text>
            <ul>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on Manuel`s
                Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or `mirror`` the
                materials on any other server.
              </li>
            </ul>
            <Text>
              This will let Manuel terminate upon violations of any of these
              restrictions. Upon termination, your viewing right will also be
              terminated and you should destroy any downloaded materials in your
              possession whether it is printed or electronic format.
            </Text>
            <SubtitleSmall>Disclaimer</SubtitleSmall>
            <Text>
              All the materials on Manuel`s Website are provided `as is``.
              Manuel makes no warranties, may it be expressed or implied,
              therefore negates all other warranties. Furthermore, Manuel does
              not make any representations concerning the accuracy or
              reliability of the use of the materials on his Website or
              otherwise relating to such materials or any sites linked to this
              Website.
            </Text>
            <SubtitleSmall>Limitations</SubtitleSmall>
            <Text>
              Manuel or his suppliers will not be held accountable for any
              damages that will arise with the use or inability to use the
              materials on Manuel`s Website, even if Manuel or an authorized
              representative of this Website has been notified, orally or
              written, of the possibility of such damage. Some jurisdictions do
              not allow limitations on implied warranties or limitations of
              liability for incidental damages, these limitations may not apply
              to you.
            </Text>
            <SubtitleSmall>Revisions and Errata</SubtitleSmall>
            <Text>
              The materials appearing on Manuel`s Website may include technical,
              typographical, or photographic errors. Manuel will not promise
              that any of the materials in this Website are accurate, complete,
              or current. Manuel may change the materials contained on his
              Website at any time without notice. Manuel does not make any
              commitment to update the materials.
            </Text>
            <SubtitleSmall>Links</SubtitleSmall>
            <Text>
              Manuel has not reviewed all of the sites linked to his Website and
              is not responsible for the contents of any such linked site. The
              presence of any link does not imply endorsement by Manuel of the
              site. The use of any linked website is at the user`s own risk.
            </Text>
            <SubtitleSmall>Site Terms of Use Modifications</SubtitleSmall>
            <Text>
              Manuel may revise these Terms of Use for his Website at any time
              without prior notice. By using this Website, you are agreeing to
              be bound by the current version of these Terms and Conditions of
              Use.
            </Text>
            <SubtitleSmall>Your Privacy</SubtitleSmall>
            <Text>
              Please read our <Link href="/privacy-policy">Privacy Policy</Link>
              .
            </Text>
            <SubtitleSmall>Governing Law</SubtitleSmall>
            <Text>
              Any claim related to Manuel`s Website shall be governed by the
              laws of Germany without regard to its conflict of law provisions.
            </Text>
          </TextSection>
        </ScrollContainer>
      </Wrapper>
    </MainContainer>
  );
}
