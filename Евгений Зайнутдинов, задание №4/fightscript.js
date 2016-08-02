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
		console.log("Легендарус победил противника №" + enemyNumber + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] );
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p>Легендарус победил противника №" + enemyNumber + ". Его сила увеличилась на " + gladiators[enemy]["weapon"] + "</p>";
		document.body.appendChild(div);
		win = true;
		if (enemyNumber == 10){
			alert("fight: Легндарус - чемпион!!!");
			console.log("fight: Легндарус - чемпион!!!");
		}
	}
	else {
		legendarus -= gladiators[enemy]["cruelty"];
		if (legendarus < 0){legendarus = 0;} //дабы не уйти в минус, обсуляем при отрицательных знчениях
		console.log("Легендарус проиграл противнику №" + enemyNumber + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] );
		//document.appenChild("<p>Легендарус победил противника №" + 1 + ". Его сила увеличилась на" + gladiators[enemy]["weapon"] + "</p>");
		var div = document.createElement('div');
		div.innerHTML = "<p style='color: red;'>Легендарус проиграл противнику №" + enemyNumber + ". Его сила уменьшилась на " + gladiators[enemy]["cruelty"] + "</p>";
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
	for(var i=1; i <= 10; i++) 
	{
		if (win) {
		fight(i);
		if (win && i==10) { console.log("BattleRow : Легндарус - чемпион!!!"); break;}
		//alert("Леегндарус - чемпион!!!");
		//console.log("запись в консоль");
		} else {
			break;
		}
	}
}

function checkStartForce ( ) {  //проверяем, было ли уже такое значение
	var isChance = true;
	console.log("Какие уже были стартовые силы Легендаруса: " + legendarusStartPowers);
	for(var f=0;f<legendarusStartPowers.length;f++)
		if (legendarus === legendarusStartPowers[f]) {
			alert("Сейчас сила легендаруса: " + legendarus + " А раньше у него была уже сила: " + legendarusStartPowers[f]);
			isChance = false;
			break;
		}
	return isChance;
}

function BigBattle () {
	legendarusStartPowers.length = 0; //обнуляем массив. Так мы сможем играть без перезагрузки страницы
	do {
		win = true;
		if(!(checkStartForce() )) {
		alert("Нет смысла биться дальше, Легендарус не сможет победить");
		break;
	}
		legendarusStartPowers.push(legendarus);
		battleRow();
		console.log("текущая сила Легендаруса " + legendarus);
		if (win) {alert("Мы выиграли");break;}
		else {
			
		}

	} while (true)
	/*if(!checkStartForce()) {
		alert("Нет смысла биться дальше, Легендарус не сможет победить");
	}*/
	/*if (checkStartForce()) { //если проверка стартовой силы дала добро
		legendarusStartPowers.push(legendarus);  //добавляем в массив еще одну стартовую силу

	}*/
}
//battleButton.onclick = testfight;
//battleButton.onclick = battleRow;
battleButton.onclick = BigBattle;