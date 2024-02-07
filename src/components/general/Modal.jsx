import React from "react";
import iconClose from "../../assets/iconClose.svg";

class Modal extends React.Component {
  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, onClose, children } = this.props;

    return (
      <>
        {isOpen && (
          <div className="modal-overlay" onClick={this.handleOverlayClick}>
            <div className="modal-content">
              <span
                className="modal-close-button fs-2 text-secondary px-3"
                onClick={onClose}
              >
                <img src={iconClose} alt="Close icon" width={27} />
              </span>
              {children}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
