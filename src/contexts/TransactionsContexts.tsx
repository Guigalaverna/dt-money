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
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "outcome";
  createdAt: string;
}

const Context = createContext({} as ContextData);

export function TransactionProvider({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("transactions");

      setTransactions(data.transactions);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransaction() {
  return useContext(Context);
}
