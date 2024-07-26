import { Modal } from "@components/common";
import { ContactModalForm } from "@components/sections";

export const ContactModal = ({ isVisible, onClose }) => {
  return (
    <Modal isOpen={isVisible} closeModal={onClose}>
      <ContactModalForm />
    </Modal>
  );
};
