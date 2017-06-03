$(document).ready(function() {
	var strength, dexterity, constritution, intelligence, wisdom, charisma; 
	var skills = [
		["appraise", 0, false],
		["balance", 0, false],
		["bluff", 0, false],
		["climb", 0, false],
		["concentration", 0, false],
		["craft", 0, false],
		["decipherScript", 0, false],
		["diplomacy", 0, false],
		["disableDevice", 0, false],
		["disguise", 0, false],
		["escapeArtist", 0, false],
		["forgery", 0, false],
		["gatherInformation", 0, false],
		["handleAnimal", 0, false],
		["heal", 0, false],
		["hide", 0, false],
		["intimidate", 0, false],
		["jump", 0, false],
		["knowledgeArcana", 0, false],
		["knowledgeArchitecture", 0, false],
		["knowledgeDungeoneering", 0, false],
		["knowledgeGeography", 0, false],
		["knowledgeHistory", 0, false],
		["knowledgeLocal", 0, false],
		["knowledgeNature", 0, false],
		["knowledgeNobility", 0, false],
		["knowledgeReligion", 0, false],
		["knowledgePlanes", 0, false],
		["listen", 0, false],
		["moveSilently", 0, false],
		["openLock", 0, false],
		["perform", 0, false],
		["profession", 0, false],
		["ride", 0, false],
		["search", 0, false],
		["senseMotive", 0, false],
		["sleightOfHand", 0, false],
		["speakLanguage", 0, false],
		["spellcraft", 0, false],
		["spot", 0, false],
		["survival", 0, false],
		["swim", 0, false],
		["tumble", 0, false],
		["useMagicDevice", 0, false],
		["useRope", 0, false]
	];

	var races;
	var baseClasses;
	var currentSkill;

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/races.json', function(data) {
		races = data;
	});

	$.getJSON('https://raw.githubusercontent.com/Brendon-K/3.5e-Random-Character/master/baseClasses.json', function(data) {
		baseClasses = data;
	});

	//Reset the page
	function reset() {
		//reset skills to 0
		for (i = 0; i < skills.length; i++) {
			skills[i][1] = 0;
		}
		//reset skill proficiency to false
		for (i = 0; i < skills.length; i++) {
			skills[i][2] = false;
		}
		//reset the class text
		$("#class").text("");

		//reset stat modifier text
		$("#strDetailed").text("");
		$("#dexDetailed").text("");
		$("#conDetailed").text("");
		$("#intDetailed").text("");
		$("#wisDetailed").text("");
		$("#chaDetailed").text("");
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
		var numRaces = races.length;
		var randRace = races[Math.floor(Math.random() * numRaces)];

		return randRace;
	}

	//Pick a random class
	function rollClass() {
		var numClasses = baseClasses.length;
		var randClass = baseClasses[Math.floor(Math.random() * numClasses)];
		return randClass;
	}

	//Show the calculation that makes up each total stat if relevant (base stat + racial stat mod)
	function racialStats(race, strength, dexterity, constitution, intelligence, wisdom, charisma) {
		if (race.str < 0) {
			$("#strDetailed").text(" (" + (strength - race.str) + " - " + race.str*-1 + ")");
		} else if (race.str > 0) {
			$("#strDetailed").text(" (" + (strength - race.str) + " + " + race.str + ")");
		}
		if (race.dex < 0) {
			$("#dexDetailed").text(" (" + (dexterity - race.dex) + " - " + race.dex*-1 + ")");
		} else if (race.dex > 0) {
			$("#dexDetailed").text(" (" + (dexterity - race.dex) + " + " + race.dex + ")");
		}
		if (race.con < 0) {
			$("#conDetailed").text(" (" + (constitution - race.con) + " - " + race.con*-1 + ")");
		} else if (race.con > 0) {
			$("#conDetailed").text(" (" + (constitution - race.con) + " + " + race.con + ")");
		}
		if (race.int < 0) {
			$("#intDetailed").text(" (" + (intelligence - race.int) + " - " + race.int*-1 + ")");
		} else if (race.int > 0) {
			$("#intDetailed").text(" (" + (intelligence - race.int) + " + " + race.int + ")");
		}
		if (race.wis < 0) {
			$("#wisDetailed").text(" (" + (wisdom - race.wis) + " - " + race.wis*-1 + ")");
		} else if (race.wis > 0) {
			$("#wisDetailed").text(" (" + (wisdom - race.wis) + " + " + race.wis + ")");
		}
		if (race.cha < 0) {
			$("#chaDetailed").text(" (" + (charisma - race.cha) + " - " + race.cha*-1 + ")");
		} else if (race.cha > 0) {
			$("#chaDetailed").text(" (" + (charisma - race.cha) + " + " + race.cha + ")");
		}
	}

	//Allocate skill points
	function allocateSkills(baseClass, totalSkillPoints, level) {
		var percent = 0;
		var maxLevel = 1*level + 3;
		
		var randNum = Math.floor(Math.random() * skills.length);
		//Allocate skills until you run out of skill points
		do {
			//Check to see if the skill changes based on user's input
			var n = Math.random();
			if (n < percent) {
				currentSkill = skills[randNum][0];
			}

			//Check if the skill is still under the max
			var isValidSkill = false;
			if (skills[randNum][2]) {
				if (skills[randNum][1] < maxLevel) {
					isValidSkill = true;
				}
			} else {
				if (skills[randNum][1] < (maxLevel / 2)) {
					isValidSkill = true;
				}
			}

			//If the skill is no longer under the max, then roll a new skill
			if (!isValidSkill) {
				randNum = Math.floor(Math.random() * skills.length);
				currentSkill = skills[randNum][0];
			}

			var isClassSkill = false;
			for (i = 0; i < baseClass.skills.length; i++) {
				if (baseClass.skills[i] == currentSkill) {
					isClassSkill = true;
					//Loop through list of skills and set the given skill to 'true' 
					//this marks that the character is now good enough with that skill to raise its max allowed points
					for (i = 0; i < skills.length; i++) {
						if (skills[i][0] == currentSkill) {
							skills[i][2] = true;
						}
					}
				}
			}
			
			if (!isClassSkill) {
				skills[randNum][1] += 0.5;
				totalSkillPoints--;
			} else {
				skills[randNum][1]++;
				totalSkillPoints--;
			}
		} while (totalSkillPoints > 0);

		return currentSkill;
	}

	//Roll the hitpoints for the character
	function rollHP(baseClass, conMod) {
		var result = rollDice(baseClass.hitDie, 1) + conMod;
		return result;
	}

	//Do this code when the button is pressed
	$(".randomButton").on("click", function() {
		var percentClass = $("#percentClass").val();
		//If the input is between 0 and 100, set the actual value to a decimal form
		//If not, then show error in textbox and default to 0
		if (percentClass >= 0 && percentClass <= 100) {
			percentClass = percentClass / 100;
		} else {
			percentClass = 0;
			$("#percentClass").val("ERROR");
		}

		var percentSkill = $("#percentSkill").val();
		if (percentSkill >= 0 && percentSkill <= 100) {
			percentSkill = percentSkill / 100;
		} else {
			percentskill = 0;
			$("#percentSkill").val("ERROR");
		}

		var level = $("#level").val();
		reset();
		var temp;
		var race = rollRace();
		var humanMod = 0;
		if (race.name == "Human") {
			humanMod = 1;
		}
		var baseClass = rollClass();
		$("#class").append(baseClass.name);

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

		//Give max possible HP at level 1
		var conMod = Math.floor((constitution - 10) / 2);
		var hitPoints = baseClass.hitDie + conMod;

		//Calculate the intelligence modifier for later use
		var intMod = Math.floor((intelligence - 10) / 2);
		//Calc skill points @ level 1
		var totalSkillPoints = 4 * (baseClass.skillPoints + intMod + humanMod);
		//Skill points can be a minimum of 1
		if (totalSkillPoints < 1) {
			totalSkillPoints = 1;
		}
		//Allocate the skill points at level 1
		allocateSkills(baseClass, totalSkillPoints, level);

		//For loop if the user selects a level larger than 1
		for (l = 1; l < level; l++) {
			//Decide if a new class is rolled
			var n = Math.random();
			if (n < percentClass) {
				//Roll a new class
				baseClass = rollClass();
			}
			//Add the class to the list of classes for the player to see what they rolled
			$("#class").append('<br />' + baseClass.name);
			//Roll HP per level
			hitPoints += rollHP(baseClass, conMod);
			//Give and allocate additional skill points per level
			totalSkillPoints = baseClass.skillPoints + intMod + humanMod;
			allocateSkills(baseClass, totalSkillPoints, level);
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

		$("#hp").text(hitPoints);

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