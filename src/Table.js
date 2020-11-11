import './App.css';
import React, { useContext } from "react";
import { useTable } from "react-table";
import { Context } from './App'

const useAPI = () => useContext(Context);

function Table({ columns }) {
  const { employees, deleteEmployeeByID } = useAPI();
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

  return (
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
                <button className="update-button">Update</button>
                <button className="delete-button" onClick={() => deleteEmployeeByID(row.values.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;