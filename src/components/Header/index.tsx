import { Container, Wrapper } from "./styles";

import { Logo } from "../../assets/";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="dt money logo" />
        <button type="button">Nova transação</button>
      </Wrapper>
    </Container>
  );
}
