const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newEmployee = {...employee, [key]: value} 
    
    return (newEmployee)
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value

  return employee
};
function deleteFromEmployeeByKey(employee, key){
   const  copyOfEmployee = {...employee}
    delete copyOfEmployee[key]

    return copyOfEmployee
};
function destructivelyDeleteFromEmployeeByKey(employee, key,){
    delete employee[key]

    return employee
};
