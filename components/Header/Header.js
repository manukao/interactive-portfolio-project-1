import styled from "styled-components";
import Logo from "./Logo";
import developer from "../developer";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  color: var(--color-primary);
  position: fixed;
  top: 0;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo logoText={developer.logoText} />
    </HeaderContainer>
  );
}
