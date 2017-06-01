$(document).ready(function() {
	var strength, dexterity, constritution, intelligence, wisdom, charisma; 

	var races;
	var baseClasses;

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/races.json', function(data) {
		races = data;
	});

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/baseClasses.json', function(data) {
		baseClasses = data;
	});

	function rollDice(numSides, numRolls) {
		var total = 0;
		for (i = 0; i < numRolls; i++) {
			//Roll a number between 1 and the number of sides and add it to the total
			total += Math.floor((Math.random() * numSides) + 1);
		}
			return total;
	}

	function rollStats() {
		var lowest = 7;
		var total = 0;
		var temp = 0;
		for (var i = 0; i < 4; i++) {
			temp = rollDice(6, 1);
			if (temp = 1) {
				temp = rollDice(6, 1);
			}
			if (temp < lowest) {
				lowest = temp;
			}
			total += temp;
		}
		total -= lowest;
		return total;
	}

	function rollRace() {
		var numRaces = 38;
		var randRace = races[Math.floor(Math.random() * numRaces)];

		return randRace;
	}

	function rollClass() {
		var numClasses = 50;
		var randClass = baseClasses[Math.floor(Math.random() * numClasses)];

		return randClass;
	}

	function racialStats(race, strength, dexterity, constitution, intelligence, wisdom, charisma) {
		if (race.str < 0) {
			$("#str").append(" (" + (strength - race.str) + " - " + race.str*-1 + ")");
		} else if (race.str > 0) {
			$("#str").append(" (" + (strength - race.str) + " + " + race.str + ")");
		}
		if (race.dex < 0) {
			$("#dex").append(" (" + (dexterity - race.dex) + " - " + race.dex*-1 + ")");
		} else if (race.dex > 0) {
			$("#dex").append(" (" + (dexterity - race.dex) + " + " + race.dex + ")");
		}
		if (race.con < 0) {
			$("#con").append(" (" + (constitution - race.con) + " - " + race.con*-1 + ")");
		} else if (race.con > 0) {
			$("#con").append(" (" + (constitution - race.con) + " + " + race.con + ")");
		}
		if (race.int < 0) {
			$("#int").append(" (" + (intelligence - race.int) + " - " + race.int*-1 + ")");
		} else if (race.int > 0) {
			$("#int").append(" (" + (intelligence - race.int) + " + " + race.int + ")");
		}
		if (race.wis < 0) {
			$("#wis").append(" (" + (wisdom - race.wis) + " - " + race.wis*-1 + ")");
		} else if (race.wis > 0) {
			$("#wis").append(" (" + (wisdom - race.wis) + " + " + race.wis + ")");
		}
		if (race.cha < 0) {
			$("#cha").append(" (" + (charisma - race.cha) + " - " + race.cha*-1 + ")");
		} else if (race.cha > 0) {
			$("#cha").append(" (" + (charisma - race.cha) + " + " + race.cha + ")");
		}
	}

	$(".randomButton").on("click", function() {
		var temp;
		var race = rollRace();
		var baseClass = rollClass();
		temp = rollStats() + race.str;
		var strength = (temp > 0) ? temp : 1;

		temp = rollStats() + race.dex;
		var dexterity = (temp > 0) ? temp : 1;

		temp = rollStats() + race.con;
		var constitution = (temp > 0) ? temp : 1;

		temp = rollStats() + race.int;
		var intelligence = (temp > 0) ? temp : 1;

		temp = rollStats() + race.wis;
		var wisdom = (temp > 0) ? temp : 1;

		temp = rollStats() + race.cha;
		var charisma = (temp > 0) ? temp : 1;

		var totalSkillPoints = baseClass.skillPoints + (Math.floor((intelligence - 10) / 2));
		if (totalSkillPoints < 1) {
			totalSkillPoints = 1;
		}

		$("#race").text(race.name);
		$("#class").text(baseClass.name);
		$("#str").text(strength);
		$("#dex").text(dexterity);
		$("#con").text(constitution);
		$("#int").text(intelligence);
		$("#wis").text(wisdom);
		$("#cha").text(charisma);
		racialStats(race, strength, dexterity, constitution, intelligence, wisdom, charisma);

		console.log(baseClass.skills.length);
	});

})