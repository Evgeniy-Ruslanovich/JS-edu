var startButton = document.getElementById('start');
console.log = startButton;
startButton.onclick = collectValues;
/* function () {
	alert("Я нашел кнопку!!!");
};*/
var gladiators = { 
	e1:{},
	e2:{},
	e3:{},
	e4:{},
	e5:{},
	e6:{},
	e7:{},
	e8:{},
	e9:{},	
};
//"e1" = {"power" = 0}};
//gladiators.e1 = {};
gladiators.e1.power = 100;
//alert(gladiators.e1.power);
var legendarus = 0; // сила Легендаруса
function collectValues() {
	var name = "power" + 1;
	gladiators.e1.power = document.getElementsByName(name)[0].value;
	//alert(document.getElementsByName(name)[0]);
	alert(gladiators.e1.power);
}