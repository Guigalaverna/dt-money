import Modal from "react-modal";

import { Container, ButtonsWrapper } from "./styles";
import { Close, Income, Outcome } from "../../assets";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={Close} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <ButtonsWrapper>
          <button type="button">
            <img src={Income} alt="Entrada" /> <span>Entrada</span>
          </button>
          <button type="button">
            <img src={Outcome} alt="Saída" /> <span>Saída</span>
          </button>
        </ButtonsWrapper>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
