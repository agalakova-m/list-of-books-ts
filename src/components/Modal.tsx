import React, { useState } from 'react';

const Modal: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Add a book</button>
      {open && (
        <div className="modal">
          <div className="modal-body">
            {children}
            <button className="modal-close" onClick={() => setOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
