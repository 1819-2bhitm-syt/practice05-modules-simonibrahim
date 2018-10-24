const startProgram = require("./startProgram.js");

function program1() {
    console.log("*** Starting Program 1 ***");
    console.log("This is Program1");

}
function program2() {
    console.log("*** Starting Program 2 ***");
    console.log("This is Program2");

}
function program3() {
    console.log("*** Starting Program 3 ***");
    console.log("This is Program3");

}

startProgram(20, "Program 1", program1);
startProgram(15, "Program 2", program2);
startProgram(10, "Program 3", program3);