$('#calculateButton').click(function() {
    let leftOperand = parseFloat($('#leftOperand').val());
    let rightOperand = parseFloat($('#rightOperand').val());
    let operator = $('#operator').val();
    let result;

    if (isNaN(leftOperand) || isNaN(rightOperand)) {
        alert("Error: Please enter valid positive integers.");
        return;
    }

    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            if (rightOperand === 0) {
                alert("Error: Division by zero.");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case '%':
            if (rightOperand === 0) {
                alert("Error: Modulo by zero.");
                return;
            }
            result = leftOperand % rightOperand;
            break;
    }

    alert("Result: " + result);
});
