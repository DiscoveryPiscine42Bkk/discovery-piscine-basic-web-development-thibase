
document.getElementById("calculateButton").addEventListener("click", function() {
   
    const leftOperand = parseFloat(document.getElementById("leftOperand").value);
    const rightOperand = parseFloat(document.getElementById("rightOperand").value);
    const operator = document.getElementById("operator").value;

   
    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Error: Please enter valid positive integers.");
        return;
    }

    let result;

    
    switch (operator) {
        case "+":
            result = leftOperand + rightOperand;
            break;
        case "-":
            result = leftOperand - rightOperand;
            break;
        case "*":
            result = leftOperand * rightOperand;
            break;
        case "/":
            if (rightOperand === 0) {
                alert("Error: Division by zero.");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case "%":
            if (rightOperand === 0) {
                alert("Error: Modulo by zero.");
                return;
            }
            result = leftOperand % rightOperand;
            break;
        default:
            alert("Error: Invalid operator.");
            return;
    }

    
    alert("Result: " + result);
    console.log("Result: " + result);
});


setInterval(function() {
    alert("Please, use me...");
}, 30000);

