var num1 = Number(prompt("Бірінші санды енгізіңіз")) ;
var num2 = Number( prompt("Екінші санды енгізіңіз"));
var num3 = Number( prompt("Үшінші санды енгізіңіз"));



var maxNum = max(num1, num2, num3);
var minNum = min(num1, num2, num3);

if (max !== min) {
    alert("Ең үлкен сан мен кіші санның айырмасы: " + (maxNum - minNum));
} else {
    alert("Барлық сандар бірдей.");
}

alert("Код аяқталды");