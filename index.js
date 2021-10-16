// Write your solution in this file!

//define employee

const employee = {
    name: "Joe",
    streetaddress: "123 second st",
}

console.log(employee)


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee}
    newObj[key] = value
    return( newObj )
}



//console.log( updateEmployeeWithKeyAndValue(employee, "name", "bob") )


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return(employee)
}


function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return (newObj);
}

console.log( deleteFromEmployeeByKey(employee, "name") )


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}













// const employee = {name:0, streetAddress:0};


// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newObject = {...employee};
//     newObject[key] = value;
//     return newObject;
// }

// console.log(employee);

// console.log(updateEmployeeWithKeyAndValue(employee, "name", "RJL") )


// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// }

// console.log(employee);

// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "RJL") )

// console.log(employee);


// function deleteFromEmployeeByKey(employee, key) {
//     const newObject = {...employee};
//     delete newObject[key];
//     return newObject;
// }

// console.log(deleteFromEmployeeByKey(employee, "name") )


// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }






//destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.