import React from "react";

export const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`modal ${isOpen ? "modal--opened" : ""}`}
      onClick={closeModal}
    >
      <div className="modal-backdrop">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
