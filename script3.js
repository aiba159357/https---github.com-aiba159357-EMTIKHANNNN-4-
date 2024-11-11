var a = Number(prompt("Бірінші санды енгіз:"));
var b =  Number(prompt("Екінші санды енгіз:")); 




if (a < b) {
    alert("Бірінші сан екінші саннан кіші");
} else if (a > b) {
    alert("Бірінші сан екінші саннан үлкен");
} else {
    alert("Сандар тең");
}

var ortasan = (a + b) / 2;
alert("Орташа сан: " + ortasan);

alert("Код аяқталды");
