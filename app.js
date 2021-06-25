let greaterNumber

while (true) {
    greaterNumber = Number(prompt('Please enter a number greater than 100'))
    if (greaterNumber > 100) {
        break;
    } else {
    alert("wrong answer");
    }
}
alert("correct answer!");
