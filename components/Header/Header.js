import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: var(--background-color);
  color: var(--color-primary);
  position: fixed;
  top: 0;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
}
