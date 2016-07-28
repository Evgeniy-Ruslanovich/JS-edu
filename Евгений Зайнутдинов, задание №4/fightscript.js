"use strict";
var startButton = document.getElementById('start');
var battleButton = document.getElementById('battle');
//console.log = startButton;
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
	e10:{},
};

var legendarus = 0; // сила Легендаруса
function collectValues() {
	legendarus = +document.getElementsByName("spartakus-power")[0].value;

	console.log("Legendarus force : " + legendarus);
	function collectProperties(prop, quantity) {
		for (var i=1; i<=quantity; i++) {
			var name = prop + i;
			var enemy = "e" + i;
			gladiators[enemy][prop] = +document.getElementsByName(name)[0].value;
			//alert(gladiators[enemy][prop]); //prop +  "гладиатора №" + i " Равна: " + 
			console.log(name + " : " + gladiators[enemy][prop]);
		}
	}

	collectProperties("power", 10);
	collectProperties("weapon", 10);
	collectProperties("cruelty", 10);

}

var win = true;
var legendarusStartPowers = [];

/*Просчет одиночной битвы*/
function fight (enemyNumber) {
	var enemy = "e" + enemyNumber;
	var enemyForce = gladiators[enemy]["power"];
	if (legendarus > enemyForce) {
		legendarus += gladiators[enemy]["weapon"];
		console.log("<p>Легендарус победил противника №" + enemyNumber + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] + "</p>");
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p>Легендарус победил противника №" + enemyNumber + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] + "</p>";
		document.body.appendChild(div);
		win = true;
		if (enemyNumber == 9){
			alert("Леегндарус - чемпион!!!");
			console.log("Леегндарус - чемпион!!!");
		}
	}
	else {
		legendarus -= gladiators[enemy]["cruelty"];
		console.log("<p>Легендарус проиграл противнику №" + enemyNumber + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] + "</p>");
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p>Легендарус проиграл противнику №" + enemyNumber + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] + "</p>";
		document.body.appendChild(div);
		win =  false;
	}
}

/*тестовая битва*/
function testfight () {
	var enemy = "e" + 1;
	var enemyForce = gladiators[enemy]["power"];
	alert("cbkf dhfuf: " + gladiators[enemy]["power"]);
	if (legendarus > enemyForce) {
		legendarus += gladiators[enemy]["weapon"];
		console.log("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] + "</p>");
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] + "</p>";
		document.body.appendChild(div);
	}
	else {
		legendarus -= gladiators[enemy]["cruelty"];
		console.log("<p>Легендарус проиграл противнику №" + 1 + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] + "</p>");
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p>Легендарус проиграл противнику №" + 1 + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] + "</p>";
		document.body.appendChild(div);
	}
}

function battleRow() {
	for(var i=1; i <= 10; i++) {
		if (win) {
		fight(i);
		//if (win && i==10) { alert("Леегндарус - чемпион!!!"); }
		alert("Леегндарус - чемпион!!!");
		console.log("запись в консоль");
	} else {
		break;
	}
}
}


//battleButton.onclick = testfight;
battleButton.onclick = battleRow;