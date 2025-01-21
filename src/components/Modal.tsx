import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={props.onClose}>X</button>
        <div className='modal-content'>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
