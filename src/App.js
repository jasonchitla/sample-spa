import './App.css';
import React from "react";
import employeeData from './employeeData'
import Table from './Table'
  
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1>Employees</h1>
          <button className="header-button" >Add +</button>
        </div>
        <Table columns={columns} data={employeeData.employees} />
      </header>
    </div>
  );
}

export default App;
