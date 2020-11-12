import './App.css';
import React, { useReducer, createContext, useState } from 'react';
import employeeData from './employeeData'
import Table from './Table'
import employeeReducer from './EmployeeReducer'
import EditModal from './EditModal';

const initialState = {employees: employeeData.employees};
  
const columns = [
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Email",
    accessor: "email"
  }
];

const Context = createContext({
  ...initialState,
  addEmployee: () => { },
  updateEmployee: () => { },
  deleteEmployeeByID: () => { }
});

function App() {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  const addEmployee = (employee) => {
    dispatch({ type: 'ADD',
      payload: {
        employee
      }
    });
    setShowModal(false);
  };

  const updateEmployee = (id, updatedEmployee) => {
    dispatch({ type: 'UPDATE',
      payload: {
        id,
        updatedEmployee
      }
    });
  };

  const deleteEmployeeByID = (employeeID) => {
    dispatch({ type: 'DELETE',
      payload: {
        employeeID
      }
    });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        addEmployee,
        updateEmployee,
        deleteEmployeeByID
      }}
    >
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <h1>Employees</h1>
            <button className="header-button" onClick={() => setShowModal(true)}>Add +</button>
          </div>
          <EditModal
            showModal={showModal}
            dismissHandler={() => setShowModal(false)}
            title={'Add Employee'}
            actionHandler={addEmployee}
            employee={employeeData.emptyEmployee}
            />
          <Table columns={columns} />
        </header>
      </div>
    </Context.Provider>
  );
}

export {
  App,
  Context
}