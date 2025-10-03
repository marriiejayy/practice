function showBasicVariables() {
    let studentName = "Mariam Adesina";
    const schoolName = "Javascript Academy";
    let age = 25

    let output = `
        <strong>Basic Variables: </strong><br><br>
        Student Name: ${studentName}<br>
        School Name : ${schoolName}<br>
        Age: ${age}<br>
        <em>studentName and age use 'let' (can be changed)<br>
        schoolName uses const (cannot be changed)</em>
    `;

    document.getElementById('variables-output').innerHTML = output;
    console.log('student name:', studentName, 'school name:', schoolName, 'age:', age)
}

function showVariableTypes() {
    let userName = "John Doe";
    let userAge = 22;
    let isActive = true;
    let salary = 500000.50;
    let middleName = null;
    let nickname;

    let output = `
        <strong>Variable types</strong><br></br>
        User name: "${userName}" (type: ${typeof userName})<br>
        User Age: ${userAge} (type: ${typeof userAge})<br>
        Is Active: ${isActive} (type: ${typeof isActive})<br>
        Salary: ${salary} (type: ${typeof salary})<br>
        Middle name: ${middleName} (type: ${typeof middleName})<br>
        Nickname: ${nickname} (type: ${typeof nickname})<br>
    `;

    document.getElementById('variables-output').innerHTML = output;
}

