import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../form/form';
import { Item } from '../item/item';
import FocusTrap from 'focus-trap-react';
import './modal.css';

export const Modal = ({
  modalBody,
  onEscDown,
  closeModal,
  onSubmit,
  currentItem
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onKeyDown={onEscDown}
      >
        <div className="modal-area">
          <button
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onMouseDown={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            { modalBody === "form" &&
              <Form onSubmit={onSubmit} />
            }
            { modalBody === "item" &&
              <Item item={currentItem}/>
            }
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
