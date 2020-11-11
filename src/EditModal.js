import './App.css';
import React, { useReducer } from 'react';
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

function init(employee) {
  if (!employee) {
    return {id: '',
            firstName: '',
            lastName: '',
            email: ''};
  }

  return {id: employee.id ?? '',
          firstName: employee.firstName ?? '',
          lastName: employee.lastName ?? '',
          email: employee.email ?? ''};
}

function reducer(state, action) {
  switch (action.type) {
    case 'firstName':
      return {...state, firstName: action.payload.data};
    case 'lastName':
      return {...state, lastName: action.payload.data};
    case 'id':
      return {...state, id: action.payload.data};
    case 'email':
      return {...state, email: action.payload.data};
    default:
      throw new Error();
  }
}

function handleInputChange(dispatch, event) {
  const target = event.target;
  const name = target.name;

  dispatch({ type: name,
    payload: {
      data: target.value
    }
  });
}

function EditModal({ showModal, dismissHandler, title, actionHandler, employee }) {
  const [state, dispatch] = useReducer(reducer, employee, init);

  return (
    <div>
      <ReactModal isOpen={showModal} style={customStyles}>
        <div className="modal">
          <h3 style={{textAlign: 'center'}}>{title}</h3>
          <form className="modal" onSubmit={(e) => {
              e.preventDefault();
              actionHandler(state)
            }}>
            <label>
              ID:
              <input name="id" type="text" value={state.id} onChange={(e) => handleInputChange(dispatch, e)} />
            </label>
            <label>
              First Name:
              <input name="firstName" type="text" value={state.firstName} onChange={(e) => handleInputChange(dispatch, e)} />
            </label>
            <label>
              Last Name:
              <input name="lastName" type="text" value={state.lastName} onChange={(e) => handleInputChange(dispatch, e)} />
            </label>
            <label>
              Email:
              <input style={{marginBottom: '10px'}} name="email" type="text" value={state.email} onChange={(e) => handleInputChange(dispatch, e)} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <button onClick={() => dismissHandler()}>Close</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default EditModal;