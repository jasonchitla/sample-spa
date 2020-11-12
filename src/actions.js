import lodashClonedeep from 'lodash.clonedeep';

function updateAction(state, id, updatedEmployee) {
  const newEmployeesArray = lodashClonedeep(state.employees);
  const indexToUpdate = newEmployeesArray.findIndex(employee => employee.id === id);
  newEmployeesArray.splice(indexToUpdate, 1, updatedEmployee);
  return newEmployeesArray;
}

function deleteAction(state, id) {
  const newEmployeesArray = lodashClonedeep(state.employees);
  const indexToRemove = newEmployeesArray.findIndex(employee => employee.id === id);
  newEmployeesArray.splice(indexToRemove, 1);
  return newEmployeesArray;
}

function addAction(state, employee) {
  return state.employees.concat([employee])
}

export {
  updateAction,
  deleteAction,
  addAction
};