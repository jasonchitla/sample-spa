import './App.css';
import React, { useContext, useState } from "react";
import { useTable } from "react-table";
import { Context } from './App'
import EditModal from './EditModal';
import employeeData from './employeeData'

const useAPI = () => useContext(Context);

function Table({ columns }) {
  const { employees, deleteEmployeeByID, updateEmployee } = useAPI();
  const [showModal, setShowModal] = useState(false);
  const [updateEmployeeId, setUpdateEmployeeId] = useState('');

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: employees
  })

  const updateClicked = (id) => {
    setUpdateEmployeeId(id);
    setShowModal(true);
  }
  const updateHandler = (employee) => {
    updateEmployee(updateEmployeeId, employee);
    setShowModal(false);
  }

  let employeeToBeUpdated = employees.find(employee => employee.id === updateEmployeeId);
  if (!employeeToBeUpdated) {
    employeeToBeUpdated = employeeData.emptyEmployee
  }

  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
              <td className="buttons-container">
                <button className="update-button" onClick={() => updateClicked(row.values.id)}>Update</button>
                <button className="delete-button" onClick={() => deleteEmployeeByID(row.values.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <EditModal
      showModal={showModal}
      dismissHandler={() => setShowModal(false)}
      title={'Update Employee'}
      actionHandler={updateHandler}
      employee={employeeToBeUpdated}
      />
  </>
  )
}

export default Table;