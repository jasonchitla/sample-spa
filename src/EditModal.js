import './App.css';
import React from 'react';
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function EditModal({ showModal, dismissHandler, title, employee }) {
  return (
    <div>
      <ReactModal isOpen={showModal} style={customStyles}>
        <div className="modal">
          <h3>{title}</h3>
          <input className="modal-input" type="text" id="id" name="id" placeholder="New Employee ID"></input>
          <input className="modal-input" type="text" id="firstName" name="firstName" placeholder="First Name"></input>
          <input className="modal-input" type="text" id="lastName" name="lastName" placeholder="Last Name"></input>
          <input className="modal-input" type="text" id="email" name="email" placeholder="Email"></input>
          <button onClick={() => dismissHandler()}>Close</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default EditModal;