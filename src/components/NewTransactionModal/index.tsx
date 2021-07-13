import { FormEvent, useState } from "react";

import Modal from "react-modal";

import { Container, ButtonsWrapper, RadioBox } from "./styles";
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
  const [transactionType, setTransactionType] = useState<
    "income" | "outcome" | ""
  >("");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <ButtonsWrapper>
          <RadioBox
            type="button"
            onClick={() => setTransactionType("income")}
            isActive={transactionType === "income"}
            activeColor="green"
          >
            <img src={Income} alt="Entrada" /> <span>Entrada</span>
          </RadioBox>
          <RadioBox
            onClick={() => setTransactionType("outcome")}
            isActive={transactionType === "outcome"}
            type="button"
            activeColor="red"
          >
            <img
              src={Outcome}
              alt="Saída"
              onClick={() => setTransactionType("outcome")}
            />{" "}
            <span>Saída</span>
          </RadioBox>
        </ButtonsWrapper>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
