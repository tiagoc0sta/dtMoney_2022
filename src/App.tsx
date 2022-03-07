import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransctionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
  }

  return (
  <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

    <Dashboard/>

    <NewTransactionModal
    isOpen={isNewTransctionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}

    />

    <GlobalStyle />
  </TransactionsProvider>
  );
}

