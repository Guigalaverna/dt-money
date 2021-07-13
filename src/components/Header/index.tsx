import { Container, Wrapper } from "./styles";

import LogoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={LogoImage} alt="dt money logo" />
        <button type="button">Nova transação</button>
      </Wrapper>
    </Container>
  );
}
