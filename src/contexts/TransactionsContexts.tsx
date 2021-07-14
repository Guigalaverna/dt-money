import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { api } from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface ContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: "income" | "outcome" | "";
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

const Context = createContext({} as ContextData);

export function TransactionProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("transactions");

      setTransactions(data.transactions);
    })();
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <Context.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransaction() {
  return useContext(Context);
}
