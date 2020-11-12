import { updateAction, deleteAction, addAction } from './actions'

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      const { id, updatedEmployee } = action.payload;
      return {employees: updateAction(state, id, updatedEmployee)};
    case 'DELETE':
      const { employeeID } = action.payload;
      return {employees: deleteAction(state, employeeID)};
    case 'ADD':
      const { employee } = action.payload;
      return {employees: addAction(state, employee)};
    default:
      throw new Error();
  }
}

export default reducer;