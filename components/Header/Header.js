import styled from "styled-components";
import Logo from "./Logo";
import developer from "../developer";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  //background-color: var(--background-color);
  color: var(--color-primary);
  position: fixed;
  top: 0;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo logoText={developer.logoText} />
      <>la la la ...</>
    </HeaderContainer>
  );
}
