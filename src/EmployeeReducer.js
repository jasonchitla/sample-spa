import lodashClonedeep from 'lodash.clonedeep';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      const { id, updatedEmployee } = action.payload;
      const newEmployeesArray1 = lodashClonedeep(state.employees);
      const indexToUpdate = newEmployeesArray1.findIndex(employee => employee.id === id);
      newEmployeesArray1.splice(indexToUpdate, 1, updatedEmployee);
      return {employees: newEmployeesArray1};
    case 'DELETE':
      const { employeeID } = action.payload;
      const newEmployeesArray2 = lodashClonedeep(state.employees);
      const indexToRemove = newEmployeesArray2.findIndex(employee => employee.id === employeeID);
      newEmployeesArray2.splice(indexToRemove, 1);
      return {employees: newEmployeesArray2};
    case 'ADD':
      const { employee } = action.payload;
      return {employees: state.employees.concat([employee])};
    default:
      throw new Error();
  }
}

export default reducer;