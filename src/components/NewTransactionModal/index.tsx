import Modal from "react-modal";

import { Container } from "./styles";

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
    <Container>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </Container>
  );
}
