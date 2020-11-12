import employeeData from './employeeData'
import { addAction, deleteAction, updateAction } from './actions'

const employeeListAfterRemovingNonexistentEmployee = [
  {
    id: 213354,
    firstName: 'Jason',
    lastName: 'Chitla',
    email: 'jasonchitla@hotmail.com'
  },
  {
    id: 504159,
    firstName: 'Venkatesh',
    lastName: 'Yerramsetty',
    email: 'vyerramsetty@fidelity.com'
  },
  {
    id: 631450,
    firstName: 'Sancho',
    lastName: 'Sebastine',
    email: 'ssebastine@fidelity.com'
  },
  {
    id: 557929,
    firstName: 'Subin',
    lastName: 'John',
    email: 'sjohn@fidelity.com'
  }
];

const employeeListAfterRemovingJason = [
  {
    id: 504159,
    firstName: 'Venkatesh',
    lastName: 'Yerramsetty',
    email: 'vyerramsetty@fidelity.com'
  },
  {
    id: 631450,
    firstName: 'Sancho',
    lastName: 'Sebastine',
    email: 'ssebastine@fidelity.com'
  },
  {
    id: 557929,
    firstName: 'Subin',
    lastName: 'John',
    email: 'sjohn@fidelity.com'
  }
];

const employeeListAfterAddingJohn = [
  {
    id: 213354,
    firstName: 'Jason',
    lastName: 'Chitla',
    email: 'jasonchitla@hotmail.com'
  },
  {
    id: 504159,
    firstName: 'Venkatesh',
    lastName: 'Yerramsetty',
    email: 'vyerramsetty@fidelity.com'
  },
  {
    id: 631450,
    firstName: 'Sancho',
    lastName: 'Sebastine',
    email: 'ssebastine@fidelity.com'
  },
  {
    id: 557929,
    firstName: 'Subin',
    lastName: 'John',
    email: 'sjohn@fidelity.com'
  },
  {
    id: 932753,
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@fidelity.com'
  }
];

const employeeListAfterUpdatingSancho = [
  {
    id: 213354,
    firstName: 'Jason',
    lastName: 'Chitla',
    email: 'jasonchitla@hotmail.com'
  },
  {
    id: 504159,
    firstName: 'Venkatesh',
    lastName: 'Yerramsetty',
    email: 'vyerramsetty@fidelity.com'
  },
  {
    id: 631450,
    firstName: 'S',
    lastName: 'Sebastine',
    email: 'sancho@fidelity.com'
  },
  {
    id: 557929,
    firstName: 'Subin',
    lastName: 'John',
    email: 'sjohn@fidelity.com'
  }
];


describe('employee actions', () => {
  it('delete employee Jason', () => {
      const idToDelete = 213354;
      const newListOfEmployees = deleteAction(employeeData, idToDelete)
      expect(newListOfEmployees).toEqual(employeeListAfterRemovingJason);
    });

  it('delete nonexistent employee', () => {
    const idToDelete = 0;
    const newListOfEmployees = deleteAction(employeeData, idToDelete)
    expect(newListOfEmployees).toEqual(employeeListAfterRemovingNonexistentEmployee);
  });
  
  it('add employee John', () => {
    const newEmployee = {
      id: 932753,
      firstName: 'John',
      lastName: 'Smith',
      email: 'jsmith@fidelity.com'
    };
    const newListOfEmployees = addAction(employeeData, newEmployee)
    expect(newListOfEmployees).toEqual(employeeListAfterAddingJohn);
  });

  it('update employee Sancho', () => {
    const updatedEmployee = {
      id: 631450,
      firstName: 'S',
      lastName: 'Sebastine',
      email: 'sancho@fidelity.com'
    };
    const newListOfEmployees = updateAction(employeeData, 631450, updatedEmployee)
    expect(newListOfEmployees).toEqual(employeeListAfterUpdatingSancho);
  });
});
