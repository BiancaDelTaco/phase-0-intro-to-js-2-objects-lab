// Write your solution in this file!

let employee = {
    name: '',
    streetAddress: ''
    }

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObject = { ...employee }
  newObject[key] = value
  return newObject;
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
  } 

  function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)  
    delete newObject [key]
    return newObject
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee.name;
      return employee
  }


