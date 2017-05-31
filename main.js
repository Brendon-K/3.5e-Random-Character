$(document).ready(function() {
	var strength, dexterity, constritution, intelligence, wisdom, charisma; 

	function race(name, str, dex, con, int, wis, cha) {
		this.name = name;
		this.str = str;
		this.dex = dex;
		this.con = con;
		this.int = int;
		this.wis = wis;
		this.cha = cha;
	}

	var human = new race("Human", 0, 0, 0, 0, 0, 0);
	var dwarf = new race("Dwarf", 0, 0, 2, 0, 0, -2);
	var elf = new race("Elf", 0, 2, -2, 0, 0, 0);
	var gnome = new race("Gnome", -2, 0, 2, 0, 0, 0);
	var halfElf = new race("Half-Elf", 0, 0, 0, 0, 0, 0);
	var halfOrc = new race("Half-Orc", 2, 0, -2, -2, 0, 0);
	var halfling = new race("Halfling", -2, 2, 0, 0, 0, 0);
	var orc = new race("Orc", 4, 0, 0, -2, -2, -2);
	var aasimar = new race("Lesser Aasimar", 0, 0, 0, 0, 2, 2);
	var asherati = new race("Asherati", 0, 0, 0, 0, 0, 0);
	var aventi = new race("Aventi", 0, 0, 0, 0, 0, 0);
	var azurin = new race("Azurin", 0, 0, 0, 0, 0, 0);
	var bhuka = new race("Bhuka", -2, 2, 0, 0, 0, 0);
	var buomman = new race("Buomman", 0, 0, 0, 0, 2, -2);
	var changeling = new race("Changeling", 0, 0, 0, 0, 0, 0);
	var daelkyrHalf = new race("Daelkyr Half-Blood", 0, 0, 0, 0, 0, 0);
	var darfellan = new race("Darfellan", 2, -2, 0, 0, 0, 0);
	var lesserDrow = new race("Lesser Drow", 0, 2, -2, 0, 0, 0);
	var duskling = new race("Duskling", 0, 0, 2, -2, 0, 0);
	var elan = new race("Elan", 0, 0, 0, 0, 0, -2);
	var hellbred = new race("Hellbred", 0, 0, -2, 0, 2);
	var illumian = new race("Illumian", 0, 0, 0, 0, 0, 0);
	var kalashtar = new race("Kalashtar", 0, 0, 0, 0, 0, 0);
	var killoren = new race("Killoren", 0, 0, 0, 0, 0, 0);
	var kobold = new race("Kobold", -4, 2, -2, 0, 0, 0);
	var maenad = new race("Maenad", 0, 0, 0, 0, 0, 0);
	var mongrelfolk = new race("Mongrelfolk", 0, 0, 4, -2, 0, -4);
	var neanderthal = new race("Neanderthal", 2, -2, 2, -2, 0, 0);
	var raptoran = new race("Raptoran", 0, 0, 0, 0, 0, 0);
	var rilkan = new race("Rilkan", 2, -2, 0, 0, 0, 0);
	var seakin = new race("Sea Kin", 0, 0, 0, 0, 0, 0);
	var shifter = new race("Shifter", 0, 2, 0, -2, -2);
	var skarns = new race("Skarns", 2, -2, 0, 0, 0, 0);
	var spellscale = new race("Spellscale", 0, 0, -2, 0, 0, 2);
	var synad = new race("Synad", 0, 0, 0, 0, 0, 0);
	var underfolk = new race("Underfolk", 0, 0, 0, 0, 0, 0);
	var warforged = new race("Warforged", 0, 0, 2, 0, -2, -2);
	var xeph = new race("Xeph", -2, 2, 0, 0, 0, 0);

	var races = [human, dwarf, elf, gnome, halfElf, halfOrc, halfling, orc, aasimar, asherati, aventi, azurin, bhuka, buomman, changeling, daelkyrHalf, darfellan, lesserDrow, duskling, elan, hellbred, illumian, kalashtar, killoren, kobold, maenad, mongrelfolk, neanderthal, raptoran, rilkan, seakin, shifter, skarns, spellscale, synad, underfolk, warforged, xeph];

	function baseClass(name, appraise, balance, bluff, climb, concentration, craft, decipherScript, diplomacy, disableDevice, disguise, escapeArtist, forgery, gatherInformation, handleAnimal, heal, hide, intimidate, jump, knowledgeArcana, knowledgeArchitecture, knowledgeDungeoneering, knowledgeGeography, knowledgeHistory, knowledgeLocal, knowledgeNature, knowledgeNobility, knowledgeReligion, knowledgePlanes, listen, moveSilently, openLock, perform, profession, ride, search, senseMotive, sleightOfHand, speakLanguage, spellcraft, spot, survival, swim, tumble, useMagicDevice, useRope, skillPoints) {
		this.name = name;
		this.appraise = appraise;
		this.balance = balance;
		this.bluff = bluff;
		this.climb = climb;
		this.concentration = concentration;
		this.craft = craft;
		this.decipherScript = decipherScript;
		this.diplomacy = diplomacy;
		this.disableDevice = disableDevice;
		this.disguise = disguise;
		this.escapeArtist = escapeArtist;
		this.forgery = forgery;
		this.gatherInformation = gatherInformation;
		this.handleAnimal = handleAnimal;
		this.heal = heal;
		this.hide = hide;
		this.intimidate = intimidate;
		this.jump = jump;
		this.knowledgeArcana = knowledgeArcana;
		this.knowledgeArchitecture = knowledgeArchitecture;
		this.knowledgeDungeoneering = knowledgeDungeoneering;
		this.knowledgeGeography = knowledgeGeography;
		this.knowledgeHistory = knowledgeHistory;
		this.knowledgeLocal = knowledgeLocal;
		this.knowledgeNature = knowledgeNature;
		this.knowledgeNobility = knowledgeNobility;
		this.knowledgeReligion = knowledgeReligion;
		this.knowledgePlanes = knowledgePlanes;
		this.listen = listen;
		this.moveSilently = moveSilently;
		this.openLock = openLock;
		this.perform = perform;
		this.profession = profession;
		this.ride = ride;
		this.search = search;
		this.senseMotive = senseMotive;
		this.sleightOfHand = sleightOfHand;
		this.speakLanguage = speakLanguage;
		this.spellcraft = spellcraft;
		this.spot = spot;
		this.survival = survival;
		this.swim = swim;
		this.tumble = tumble;
		this.useMagicDevice = useMagicDevice;
		this.useRope = useRope;
		this.skillPoints = skillPoints;
	}

	var archivist = new baseClass("Archivist", false, false, false, false, true, true, true, true, false, false, false, false, true, false, true, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, parseInt(4));
	var ardent = new baseClass("Ardent", false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, 2);
	var artificer = new baseClass("Artificer", true, false, false, false, true, true, false, false, true, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, true, false, false, true, false, true, false, true, false, false, false, true, false, false, false, false, true, false, 4);
	var barbarian = new baseClass("Barbarian", false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, true, true, false, false, false, 4);
	var bard = new baseClass("Bard", true, true, true, true, true, true, true, true, false, true, true, false, true, false, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, false, true, true, true, true, false, false, true, true, true, false, 6);
	var beguiler = new baseClass("Beguiler", true, true, true, true, true, false, true, true, true, true, true, true, true, false, false, true, false, true, true, false, false, false, false, true, false, false, false, false, true, true, true, false, true, false, true, true, true, true, true, true, false, true, true, true, false, 6);
	var binder = new baseClass("Binder", false, false, true, false, true, true, true, true, false, false, false, false, true, false, false, true, true, true, true, false, false, false, false, true, false, false, true, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, 2);
	var cleric = new baseClass("Cleric", false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var crusader = new baseClass("Crusader", false, true, false, false, true, true, false, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, 4);
	var divineMind = new baseClass("Divine Mind", false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, 2);
	var dragonShaman = new baseClass("Dragon Shaman", false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, 2);
	var dragonfireAdept = new baseClass("Dragonfire Adept", true, false, true, true, true, true, true, true, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, true, true, false, true, true, true, false, false, false, true, false, 4);
	var dreadNecromancer = new baseClass("Dread Necromancer", false, false, true, false, true, true, true, false, false, true, false, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var druid = new baseClass("Druid", false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, true, true, false, false, false, false, true, true, true, true, false, false, false, 4);
	var duskblade = new baseClass("Duskblade", false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, true, false, true, false, false, true, false, false, true, false, false, false, 2);
	var factotum = new baseClass("Factotum", true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, 6);
	var favoredSoul = new baseClass("Favored Soul", false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, 2);
	var fighter = new baseClass("Fighter", false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, 2);
	var healer = new baseClass("Healer", false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false, false, true, false, false, true, false, true, false, false, false, false, 4);
	var hexblade = new baseClass("Hexblade", false, false, true, false, true, true, false, true, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, true, false, false, false, false, false, false, 2);
	var incarnate = new baseClass("Incarnate", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var knight = new baseClass("Knight", false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, 2);
	var lurk = new baseClass("Lurk", false, false, true, false, true, true, false, false, false, true, true, false, false, false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, false, true, false, true, true, false, true, true, true, false, 4);
	var marshal = new baseClass("Marshal", false, false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, true, true, true, true, true, true, true, true, true, true, true, false, false, true, false, true, false, true, false, true, false, true, true, true, false, false, false, 4);
	var monk = new baseClass("Monk", false, true, false, true, true, true, false, true, false, false, true, false, false, false, false, true, false, true, true, false, false, false, false, false, false, false, true, false, true, true, false, true, true, false, false, true, false, false, false, true, false, true, true, false, false, 4);
	var ninja = new baseClass("Ninja", false, true, true, true, true, true, false, false, true, true, true, false, true, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, true, true, true, false, false, true, false, true, true, false, false, 6);
	var paladin = new baseClass("Paladin", false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false, false, 2);
	var psion = new baseClass("Psion", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var psychicWarrior = new baseClass("Psychic Warrior", false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, true, false, false, false, 2);
	var ranger = new baseClass("Ranger", false, false, false, true, true, true, false, false, false, false, false, false, false, true, true, true, false, true, false, false, true, true, false, false, true, false, false, false, true, true, false, false, true, true, true, false, false, false, false, true, true, true, false, false, true, 6);
	var rogue = new baseClass("Rogue", true, true, true, false, true, true, true, true, true, true, true, true, true, false, false, true, true, true, false, false, false, false, false, true, false, false, false, false, true, true, true, true, true, false, true, true, true, false, false, true, false, true, true, true, true, 8);
	var samurai = new baseClass("Samurai", false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, 2);
	var scout = new baseClass("Scout", false, true, false, true, false, true, false, false, true, false, true, false, false, false, false, true, false, true, false, false, true, true, false, false, true, false, false, false, true, true, false, false, false, true, true, true, false, true, false, true, true, true, true, false, true, 8);
	var shadowcaster = new baseClass("Shadowcaster", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, true, false, true, false, false, false, false, false, false, false, false, true, false, true, false, false, true, false, false, false, false, false, true, true, false, false, false, false, false, 2);
	var shugenja = new baseClass("Shugenja", false, false, false, false, true, true, false, true, false, false, false, false, false, false, true, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 4);
	var sorcerer = new baseClass("Sorcerer", false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var soulborn = new baseClass("Soulborn", false, false, false, true, true, true, false, false, false, false, false, false, false, true, true, false, false, true, true, false, false, false, false, false, false, false, false, true, false, false, false, false, true, true, false, false, false, false, true, false, false, true, false, false, false, 2);
	var soulknife = new baseClass("Soulknife", false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, false, true, true, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, false, false, false, false, true, false, false, true, false, false, 4);
	var spellthief = new baseClass("Spellthief", true, false, true, false, true, true, true, false, true, false, true, false, true, false, false, true, false, true, true, false, false, false, false, true, false, false, false, false, true, true, true, false, false, false, true, false, false, true, true, true, false, true, true, true, false, 6);
	var spiritShaman = new baseClass("Spirit Shaman", false, false, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, false, false, false, false, true, true, true, true, false, false, false, true, false, false, false, true, true, false, false, false, false, true, true, true, false, false, false, false, 4);
	var swashbuckler = new baseClass("Swashbuckler", false, true, true, true, false, true, false, true, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, true, false, true, 4);
	var swordsage = new baseClass("Swordsage", false, true, false, true, true, true, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, true, true, true, true, false, false, true, true, false, false, true, true, false, true, false, false, false, false, false, true, true, false, false, 6);
	var totemist = new baseClass("Totemist", false, false, false, false, true, true, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, true, false, true, true, false, false, false, true, true, false, false, false, false, true, true, true, true, false, false, false, 4);
	var truenamer = new baseClass("Truenamer", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, 4);
	var warblade = new baseClass("Warblade", false, true, false, true, true, true, false, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, 4);
	var warlock = new baseClass("Warlock", false, false, true, false, true, true, false, false, false, true, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, true, true, false, false, false, false, true, false, false, true, false, false, true, false, false, false, false, true, false, 2);
	var warmage = new baseClass("Warmage", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var wilder = new baseClass("Wilder", false, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, true, true, false, true, true, false, false, 4);
	var wizard = new baseClass("Wizard", false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);
	var wuJen = new baseClass("Wu Jen", false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, 2);

	var baseClasses = [archivist, ardent, artificer, barbarian, bard, beguiler, binder, cleric, crusader, divineMind, dragonShaman, dragonfireAdept, dreadNecromancer, druid, duskblade, factotum, favoredSoul, fighter, healer, hexblade, incarnate, knight, lurk, marshal, monk, ninja, paladin, psion, psychicWarrior, ranger, rogue, samurai, scout, shadowcaster, shugenja, sorcerer, soulborn, soulknife, spellthief, spiritShaman, swashbuckler, swordsage, totemist, truenamer, warblade, warlock, warmage, wilder, wizard, wuJen];

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

	$(".randomButton").on("click", function() {
		var race = rollRace();
		var baseClass = rollClass();
		var strength = rollStats() + race.str;
		var dexterity = rollStats() + race.dex;
		var constitution = rollStats() + race.con;
		var intelligence = rollStats() + race.int;
		var wisdom = rollStats() + race.wis;
		var charisma = rollStats() + race.cha;
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

	});

})