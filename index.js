// Write your solution in this file!

//define employee
const employee = {name:0, streetAddress:0};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}

console.log(employee);

console.log(updateEmployeeWithKeyAndValue(employee, "name", "RJL") )


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

console.log(employee);

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "RJL") )

console.log(employee);


function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

console.log(deleteFromEmployeeByKey(employee, "name") )


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.