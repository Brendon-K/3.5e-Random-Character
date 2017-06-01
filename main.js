$(document).ready(function() {
	var strength, dexterity, constritution, intelligence, wisdom, charisma; 
	const NUM_SKILLS = 45; 
	var skills = [
		["appraise", 0],
		["balance", 0],
		["bluff", 0],
		["climb", 0],
		["concentration", 0],
		["craft", 0],
		["decipherScript", 0],
		["diplomacy", 0],
		["disableDevice", 0],
		["disguise", 0],
		["escapeArtist", 0],
		["forgery", 0],
		["gatherInformation", 0],
		["handleAnimal", 0],
		["heal", 0],
		["hide", 0],
		["intimidate", 0],
		["jump", 0],
		["knowledgeArcana", 0],
		["knowledgeArchitecture", 0],
		["knowledgeDungeoneering", 0],
		["knowledgeGeography", 0],
		["knowledgeHistory", 0],
		["knowledgeLocal", 0],
		["knowledgeNature", 0],
		["knowledgeNobility", 0],
		["knowledgeReligion", 0],
		["knowledgePlanes", 0],
		["listen", 0],
		["moveSilently", 0],
		["openLock", 0],
		["perform", 0],
		["profession", 0],
		["ride", 0],
		["search", 0],
		["senseMotive", 0],
		["sleightOfHand", 0],
		["speakLanguage", 0],
		["spellcraft", 0],
		["spot", 0],
		["survival", 0],
		["swim", 0],
		["tumble", 0],
		["useMagicDevice", 0],
		["useRope", 0]
	]

	var races;
	var baseClasses;

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/races.json', function(data) {
		races = data;
	});

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/baseClasses.json', function(data) {
		baseClasses = data;
	});

	//Reset the page
	function reset() {
		//reset skills to 0
		for (i = 0; i < NUM_SKILLS; i++) {
			skills[i][1] = 0;
		}
		//reset the class text
		$("#class").text("");
	}

	//Roll a "numSides"-sided die "numRolls" amount of times
	function rollDice(numSides, numRolls) {
		var total = 0;
		for (i = 0; i < numRolls; i++) {
			//Roll a number between 1 and the number of sides and add it to the total
			total += Math.floor((Math.random() * numSides) + 1);
		}
			return total;
	}

	//Roll 4 6-sided dice, re-rolling 1s once per die, and drop the lowest value
	function rollStats() {
		var lowest = 7;
		var total = 0;
		var temp = 0;
		for (var i = 0; i < 4; i++) {
			temp = rollDice(6, 1);
			if (temp == 1) {
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

	//Pick a random race
	function rollRace() {
		var numRaces = 31;
		var randRace = races[Math.floor(Math.random() * numRaces)];

		return randRace;
	}

	//Pick a random class
	function rollClass() {
		var numClasses = 50;
		var randClass = baseClasses[Math.floor(Math.random() * numClasses)];
		return randClass;
	}

	//Show the calculation that makes up each total stat if relevant (base stat + racial stat mod)
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

	//Allocate skill points
	function allocateSkills(baseClass, totalSkillPoints) {
		//Allocate skills until you run out of skill points
		do {
			var randNum = Math.floor(Math.random() * NUM_SKILLS);
			var currentSkill = skills[randNum][0];
			var isClassSkill = false;
			for (i = 0; i < baseClass.skills.length; i++) {
				if (baseClass.skills[i] == currentSkill) {
					isClassSkill = true;
				}
			}
			if (!isClassSkill) {
				if (totalSkillPoints >= 2) {
					skills[randNum][1]++;
					totalSkillPoints -= 2;
				}
			} else {
				skills[randNum][1]++;
				totalSkillPoints--;
			}
		} while (totalSkillPoints > 0);
	}

	//Do this code when the button is pressed
	$(".randomButton").on("click", function() {
		var level = $("#level").val();
		reset();
		var temp;
		var race = rollRace();
		var humanMod = 0;
		if (race.name == "Human") {
			humanMod = 1;
		}
		var baseClass = rollClass();
		$("#class").append('<b>' + baseClass.name + '</b>');

		//For each stat, roll and add race stat modifier. If the modifier makes the stat less than 1, make it 1.
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

		//Calculate the intelligence modifier for later use
		var intMod = Math.floor((intelligence - 10) / 2);
		//Calc skill points @ level 1
		var totalSkillPoints = 4 * (baseClass.skillPoints + intMod + humanMod);
		//Skill points can be a minimum of 1
		if (totalSkillPoints < 1) {
			totalSkillPoints = 1;
		}
		console.log("SP: " + totalSkillPoints);
		//Allocate the skill points at level 1
		allocateSkills(baseClass, totalSkillPoints);

		//For loop if the user selects a level larger than 1
		for (l = 1; l < level; l++) {
			//Roll a new class for each level
			baseClass = rollClass();
			//Add the class to the list of classes for the player to see what they rolled
			$("#class").append('<br />' + '<b>' + baseClass.name + '</b>');
			//Give and allocate additional skill points per level
			totalSkillPoints += baseClass.skillPoints + intMod + humanMod;

			console.log("SP: " + totalSkillPoints);
			allocateSkills(baseClass, totalSkillPoints);
			//Every 4 levels (starting at 4) raise a random stat by 1.
			if (l % 4 == 0) {
				var chooseStat = rollDice(6, 1);
				switch (chooseStat) {
					case 1:
						strength++;
						break;
					case 2:
						dexterity++;
						break;
					case 3:
						constitution++;
						break;
					case 4:
						intelligence++;
						break;
					case 5:
						wisdom++;
						break;
					case 6:
						charisma++;
						break;
				}
			}
		}

		//Manipulate the HTML
		$("#race").text(race.name);
		$("#str").text(strength);
		$("#dex").text(dexterity);
		$("#con").text(constitution);
		$("#int").text(intelligence);
		$("#wis").text(wisdom);
		$("#cha").text(charisma);
		racialStats(race, strength, dexterity, constitution, intelligence, wisdom, charisma);



		$("#appraise").text(skills[0][1]);
		$("#balance").text(skills[1][1]);
		$("#bluff").text(skills[2][1]);
		$("#climb").text(skills[3][1]);
		$("#concentration").text(skills[4][1]);
		$("#craft").text(skills[5][1]);
		$("#decipherScript").text(skills[6][1]);
		$("#diplomacy").text(skills[7][1]);
		$("#disableDevice").text(skills[8][1]);
		$("#disguise").text(skills[9][1]);
		$("#escapeArtist").text(skills[10][1]);
		$("#forgery").text(skills[11][1]);
		$("#gatherInformation").text(skills[12][1]);
		$("#handleAnimal").text(skills[13][1]);
		$("#heal").text(skills[14][1]);
		$("#hide").text(skills[15][1]);
		$("#intimidate").text(skills[16][1]);
		$("#jump").text(skills[17][1]);
		$("#knowledgeArcana").text(skills[18][1]);
		$("#knowledgeArchitecture").text(skills[19][1]);
		$("#knowledgeDungeoneering").text(skills[20][1]);
		$("#knowledgeGeography").text(skills[21][1]);
		$("#knowledgeHistory").text(skills[22][1]);
		$("#knowledgeLocal").text(skills[23][1]);
		$("#knowledgeNature").text(skills[24][1]);
		$("#knowledgeNobility").text(skills[25][1]);
		$("#knowledgeReligion").text(skills[26][1]);
		$("#knowledgePlanes").text(skills[27][1]);
		$("#listen").text(skills[28][1]);
		$("#moveSilently").text(skills[29][1]);
		$("#openLock").text(skills[30][1]);
		$("#perform").text(skills[31][1]);
		$("#profession").text(skills[32][1]);
		$("#ride").text(skills[33][1]);
		$("#search").text(skills[34][1]);
		$("#senseMotive").text(skills[35][1]);
		$("#sleightOfHand").text(skills[36][1]);
		$("#speakLanguage").text(skills[37][1]);
		$("#spellcraft").text(skills[38][1]);
		$("#spot").text(skills[39][1]);
		$("#survival").text(skills[40][1]);
		$("#swim").text(skills[41][1]);
		$("#tumble").text(skills[42][1]);
		$("#useMagicDevice").text(skills[43][1]);
		$("#useRope").text(skills[44][1]);

	});

})