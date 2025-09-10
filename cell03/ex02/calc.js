// ฟังก์ชันสำหรับการคำนวณ
document.getElementById("calculateButton").addEventListener("click", function() {
    // รับค่า input
    const leftOperand = parseFloat(document.getElementById("leftOperand").value);
    const rightOperand = parseFloat(document.getElementById("rightOperand").value);
    const operator = document.getElementById("operator").value;

    // ตรวจสอบว่าตัวเลขที่กรอกเป็นจำนวนบวกและไม่ใช่ NaN
    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Error: Please enter valid positive integers.");
        return;
    }

    let result;

    // คำนวณตามตัวดำเนินการ
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

    // แสดงผลลัพธ์ใน alert และ console
    alert("Result: " + result);
    console.log("Result: " + result);
});

// ฟังก์ชันสำหรับแสดง popup ทุก 30 วินาที
setInterval(function() {
    alert("Please, use me...");
}, 30000);
