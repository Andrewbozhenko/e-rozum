import { ContactModal } from "@components/modals";
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ toggleContactModal }}>
      {children}
      <ContactModal
        isVisible={isContactModalOpen}
        onClose={toggleContactModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
