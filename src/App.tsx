import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import Modal from 'react-modal';
Modal.setAppElement('#root');

export function App() {
  const [isNewModalTransactionModalOpen, setIsNewModalTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewModalTransactionModalOpen}
        onClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

export default App;
