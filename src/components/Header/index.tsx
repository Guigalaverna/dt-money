import { Container, Wrapper } from "./styles";

import { Logo } from "../../assets/";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Wrapper>
    </Container>
  );
}
