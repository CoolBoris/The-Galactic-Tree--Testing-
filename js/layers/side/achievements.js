addLayer("a", {
	symbol() {
		if (options.emojisEnabled == true) symbol = "🏆";
		else symbol = "A";
		return symbol;
	},

	color: "yellow",

	nodeStyle() {
		const style = {
			"border-radius": "100px",
		};

		if (options.emojisEnabled) {
			style.color = "white";
		}

		return style;
	},

	row: "side",
	position: "1",
	branches: [],

	tooltip() {
		return "";
	},

	tabFormat: {
		Achievements: {
			content: [
				[
					"display-text",
					function () {
						return `You have 
                        <h2 style="color: Yellow; text-shadow: 0px 0px 20px gold; font-family: Lucida Console, Courier New, monospace">
                        ${player.a.points}/${player.a.totalAchievements}</h2> Achievements`;
					},
				],
				[
					"display-text",
					"Achievements contain spoilers!",
					{ color: "red", "font-size": "18px" },
				],
				"blank",
				"achievements",
				"upgrades",
			],
			buttonStyle() {
				return { "border-color": "Gold" };
			},
		},
		"Secret Achievements": {
			content: [
				[
					"display-text",
					function () {
						return `You have 
                        <h2 style="color: DarkGray; text-shadow: 0px 0px 20px DarkGray; font-family: Lucida Console, Courier New, monospace">
                        ${player.sa.points}</h2> Secret Achievements`;
					},
				],
				"blank",
				"achievements",
				"upgrades",
			],
			buttonStyle() {
				return { "border-color": "DarkGray" };
			},
			embedLayer: "sa",
		},
	},

	startData() {
		return {
			unlocked: true,
			points: new Decimal(0),
			totalAchievements: new Decimal(66),
		};
	},

	update(diff) {
		let completedCount = 0;
		let totalAchievements = 0;
		for (let id in this.achievements) {
			totalAchievements++;
			if (hasAchievement("a", id)) {
				completedCount++;
			}
		}
		player.a.points = new Decimal(completedCount);
		player.a.totalAchievements = new Decimal(totalAchievements);
	},

	achievementPopups() {
		let popup = true;
		if (options.AchievementPopup == true) popup = true;
		else popup = false;
		return popup;
	},

	achievements: {
		11: {
			name: "Reality I",
			done() {
				return player.r.points.gte(1);
			},
			tooltip: "✅ Get 1 Rocket Fuel",
			goalTooltip: "❌ Get 1 Rocket Fuel",
			style() {
				const style = {
					"border-color": "#97192E",
					"border-width": "3px",
					color: "gold",
					visibility: "visible",
				};
				return style;
			},
		},
		12: {
			name: "Row 2",
			done() {
				return hasUpgrade("r", 15);
			},
			tooltip: "✅ Buy Rocket Fuel Upgrade 5",
			goalTooltip: "❌ Buy Rocket Fuel Upgrade 5",

			style: {
				visibility: "shown",
			},
		},
		13: {
			name: "1K",
			done() {
				return player.points.gte(1000);
			},
			tooltip: "✅ Get 1,000 Money",
			goalTooltip: "❌ Get 1,000 Money",

			style: {
				visibility: "shown",
			},
		},
		14: {
			name: "Rocket Engineer",
			done() {
				return player.ro.points.gte(1);
			},
			tooltip: "✅ Get 1 Rocket",
			goalTooltip: "❌ Get 1 Rocket",

			style() {
				return {
					"border-color": "#6D6D6D",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		15: {
			name: "Age of Automation",
			done() {
				return player.ro.points.gte(4);
			},
			tooltip: "✅ Get Rocket Milestone 4",
			goalTooltip: "❌ Get Rocket Milestone 4",

			style: {
				visibility: "shown",
			},
		},
		16: {
			name: "RF Millionaire",
			done() {
				return player.r.points.gte(1000000);
			},
			tooltip: "✅ Get 1,000,000 Rocket Fuel",
			goalTooltip: "❌ Get 1,000,000 Rocket Fuel",

			style: {
				visibility: "shown",
			},
		},
		21: {
			name: "Scientific Notation",
			done() {
				return player.points.gte(1e9);
			},
			tooltip: "✅ Get 1e9 Money",
			goalTooltip: "❌ Get 1e9 Money",

			style: {
				visibility: "shown",
			},
		},
		22: {
			name: "Spaceman",
			done() {
				return player.as.points.gte(1);
			},
			tooltip: "✅ Get 1 Astronaut",
			goalTooltip: "❌ Get 1 Astronaut",

			style() {
				return {
					"border-color": "#EFEFEF",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		23: {
			name: "Spacemen",
			done() {
				return player.as.points.gte(10000);
			},
			tooltip: "✅ Get 10,000 Astronauts",
			goalTooltip: "❌ Get 10,000 Astronauts",

			style: {
				visibility: "shown",
			},
		},
		24: {
			name: "Astronaut Replicator",
			done() {
				return player.as.points.gte(500000);
			},
			tooltip: "✅ Get Astronaut Milestone 2",
			goalTooltip: "❌ Get Astronaut Milestone 2",

			style: {
				visibility: "shown",
			},
		},
		25: {
			name: "> 100% ???",
			done() {
				return hasMilestone("ro", 14);
			},
			tooltip: "✅ Get Rocket Milestone 14",
			goalTooltip: "❌ Get Rocket Milestone 14",

			style: {
				visibility: "shown",
			},
		},
		26: {
			name: "and leaving Earth",
			done() {
				return player.s.points.gte(1);
			},
			tooltip: "✅ Trigger the Space reset",
			goalTooltip: "❌ Trigger the Space reset",

			style() {
				return {
					"border-color": "#AC00AC",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		31: {
			name: "Beginning of Space",
			done() {
				return player.s.points.gte(100);
			},
			tooltip: "✅ Get 100 Space Distance",
			goalTooltip: "❌ Get 100 Space Distance",

			style: {
				visibility: "shown",
			},
		},
		32: {
			name: "Still the Beginning",
			done() {
				return player.s.points.gte(10000);
			},
			tooltip: "✅ Get 10,000 Space Distance",
			goalTooltip: "❌ Get 10,000 Space Distance",

			style: {
				visibility: "shown",
			},
		},
		33: {
			name: "Even more Rocket Fuel",
			done() {
				return hasMilestone("ro", 16);
			},
			tooltip: "✅ Get Rocket Milestone 16",
			goalTooltip: "❌ Get Rocket Milestone 16",

			style: {
				visibility: "shown",
			},
		},
		34: {
			name: "troll",
			done() {
				return hasUpgrade("r", 44);
			},
			tooltip: "✅ Buy Rocket Fuel Upgrade 19",
			goalTooltip: "❌ Buy Rocket Fuel Upgrade 19",

			style: {
				visibility: "shown",
			},
		},
		35: {
			name: "2 Features?",
			done() {
				return hasMilestone("ro", 20);
			},
			tooltip: "✅ Get Rocket Milestone 20",
			goalTooltip: "❌ Get Rocket Milestone 20",

			style: {
				visibility: "shown",
			},
		},
		36: {
			name: "Ultra",
			done() {
				return hasUpgrade("s", 43);
			},
			tooltip: "✅ Get Space Distance Upgrade 10",
			goalTooltip: "❌ Get Space Distance Upgrade 10",

			style: {
				visibility: "shown",
			},
		},
		41: {
			name: "Decision 1",
			done() {
				return player.c.points.gte(1);
			},
			tooltip: "✅ Get 1 Comet",
			goalTooltip: "❌ Get 1 Comet",

			style() {
				return {
					"border-color": "#2D6CD3",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		42: {
			name: "Decision 2",
			done() {
				return player.ast.points.gte(1);
			},
			tooltip: "✅ Get 1 Asteroid",
			goalTooltip: "❌ Get 1 Asteroid",

			style() {
				return {
					"border-color": "#F1DD4A",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		43: {
			name: "Asteroids or Comets",
			done() {
				return player.ast.points.gte(20) || player.c.points.gte(20);
			},
			tooltip: "✅ Get 20 Asteroids or 20 Comets",
			goalTooltip: "❌ Get 20 Asteroids or 20 Comets",

			style: {
				visibility: "shown",
			},
		},
		44: {
			name: "Crash",
			done() {
				return player.c.points.gte(50000);
			},
			tooltip: "✅ Get 50,000 Comets",
			goalTooltip: "❌ Get 50,000 Comets",

			style: {
				visibility: "shown",
			},
		},
		45: {
			name: "Millionoid",
			done() {
				return player.ast.points.gte(1e6);
			},
			tooltip: "✅ Get 1,000,000 Asteroids",
			goalTooltip: "❌ Get 1,000,000 Asteroids",

			style: {
				visibility: "shown",
			},
		},
		46: {
			name: "Super Ultra",
			done() {
				return hasUpgrade("s", 51);
			},
			tooltip: "✅ Get Space Distance Upgrade 21",
			goalTooltip: "❌ Get Space Distance Upgrade 21",

			style: {
				visibility: "shown",
			},
		},
		51: {
			name: "Research",
			done() {
				return hasChallenge("c", 11);
			},
			tooltip: "✅ Complete Halley's Comet",
			goalTooltip: "❌ Complete Halley's Comet",

			style: {
				visibility: "shown",
			},
		},
		52: {
			name: "Research Done",
			done() {
				return hasChallenge("ast", 14);
			},
			tooltip: "✅ Complete Asteroid Ceres",
			goalTooltip: "❌ Complete Asteroid Ceres",

			style: {
				visibility: "shown",
			},
		},
		53: {
			name: "STAR",
			done() {
				return player.stars.points.gte(1);
			},
			tooltip: "✅ Get 1 Star",
			goalTooltip: "❌ Get 1 Star",

			style() {
				return {
					"border-color": "#FFFEA5",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		54: {
			name: "100/100",
			done() {
				if (getBuyableAmount("stars", 11) == 100) {
					return true;
				}
			},
			tooltip: "✅ Complete Star Buyable 1",
			goalTooltip: "❌ Complete Star Buyable 1",

			style: {
				visibility: "shown",
			},
		},
		55: {
			name: "5/5",
			done() {
				return hasUpgrade("stars", 15);
			},
			tooltip: "✅ Unlock Star Upgrade 5",
			goalTooltip: "❌ Unlock Star Upgrade 5",

			style: {
				visibility: "shown",
			},
		},
		56: {
			name: "Giant Star",
			done() {
				return hasMilestone("s", 13);
			},
			tooltip: "✅ Unlock The Sun",
			goalTooltip: "❌ Unlock The Sun",

			style() {
				return {
					"border-color": "#FF6C00",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		61: {
			name: "Light years",
			done() {
				return player.sun.points.gte(1e100);
			},
			tooltip: "✅ Get 1e100 Light",
			goalTooltip: "❌ Get 1e100 Light",

			style: {
				visibility: "shown",
			},
		},
		62: {
			name: "Infinite Light",
			done() {
				return hasChallenge("stars", 11);
			},
			tooltip: "✅ Complete The Sun",
			goalTooltip: "❌ Complete The Sun",

			style() {
				return {
					"border-color": "#5E37B0",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		63: {
			name: "Planetoid Mayhem",
			done() {
				return player.planetoid.points.gte(250);
			},
			tooltip: "✅ Get 250 Planetoids",
			goalTooltip: "❌ Get 250 Planetoids",

			style: {
				visibility: "shown",
			},
		},
		64: {
			name: "Automation Deluxe",
			done() {
				return hasMilestone("planets", 5);
			},
			tooltip: "✅ Get Planet Milestone 5",
			goalTooltip: "❌ Get Planet Milestone 5",

			style: {
				visibility: "shown",
			},
		},
		65: {
			name: "The Solar System",
			done() {
				return hasMilestone("planets", 7);
			},
			tooltip: "✅ Unlock The Solar System",
			goalTooltip: "❌ Unlock The Solar System",

			style() {
				return {
					"border-color": "#620A8A",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		66: {
			name: "Easy Planet",
			done() {
				return hasMilestone("mercury", 3);
			},
			tooltip: "✅ Complete Mercury",
			goalTooltip: "❌ Complete Mercury",

			style: {
				visibility: "shown",
			},
		},
		71: {
			name: "100 CPS",
			done() {
				if (getBuyableAmount("neptune", 11) == 100) {
					return true;
				}
			},
			tooltip: "✅ Complete Neptune Buyable 1",
			goalTooltip: "❌ Complete Neptune Buyable 1",

			style: {
				visibility: "shown",
			},
		},
		72: {
			name: "No pluto?",
			done() {
				return hasMilestone("jupiter", 1);
			},
			tooltip: "✅ Complete The Solar System",
			goalTooltip: "❌ Complete The Solar System",

			style() {
				return {
					"border-color": "#A1004C",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		73: {
			name: "Ultrafuel",
			done() {
				return hasUpgrade("r", 51);
			},
			tooltip: "✅ Unlock Rocket Fuel Upgrade 21",
			goalTooltip: "❌ Unlock Rocket Fuel Upgrade 21",

			style: {
				visibility: "shown",
			},
		},
		74: {
			name: "X-PRO",
			done() {
				return player.xpo.points.gte(1000);
			},
			tooltip: "✅ Get 1,000 XPO",
			goalTooltip: "❌ Get 1,000 XPO",

			style: {
				visibility: "shown",
			},
		},
		75: {
			name: "TRIPLE X",
			done() {
				return player.x.points.gte(3);
			},
			tooltip: "✅ Get XXX",
			goalTooltip: "❌ Get XXX",

			style: {
				visibility: "shown",
			},
		},
		76: {
			name: "The Final Rocket",
			done() {
				return hasMilestone("ro", 21);
			},
			tooltip: "✅ Unlock Rocket Milestone 21",
			goalTooltip: "❌ Unlock Rocket Milestone 21",

			style: {
				visibility: "shown",
			},
		},
		81: {
			name: "Reality II",
			done() {
				if (inChallenge("real", 11)) {
					return true;
				}
			},
			tooltip: "✅ Enter Reality 2",
			goalTooltip: "❌ Enter Reality 2",

			style() {
				return {
					"border-color": "#5c05a8",
					"border-width": "3px",
					color: "gold",
					visibility: "shown",
				};
			},
		},
		82: {
			name: "Descend",
			done() {
				return player.galaxy.points.gte(1);
			},
			tooltip: "✅ Get 1 Galaxy",
			goalTooltip: "❌ Get 1 Galaxy",

			style() {
				return {
					"border-color": "#1b1357",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		83: {
			name: "Cosmos",
			done() {
				return player.galaxy.points.gte(3);
			},
			tooltip: "✅ Unlock The Cosmos",
			goalTooltip: "❌ Unlock The Cosmos",

			style: {
				visibility: "shown",
			},
		},
		84: {
			name: "Cosmic Rats",
			done() {
				return hasUpgrade("galaxy", 23);
			},
			tooltip: "✅ Get Galaxy Upgrade 8",
			goalTooltip: "❌ Get Galaxy Upgrade 8",

			style: {
				visibility: "shown",
			},
		},
		85: {
			name: "Darkness",
			done() {
				return player.galaxy.points.gte(10);
			},
			tooltip: "✅ Unlock Dark Matter",
			goalTooltip: "❌ Unlock Dark Matter",

			style() {
				return {
					"border-color": "#450080",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		86: {
			name: "Finally more generation",
			done() {
				return hasMilestone("unstablefuel", 7);
			},
			tooltip: "✅ Get Unstable Rocket Fuel Milestone 7",
			goalTooltip: "❌ Get Unstable Rocket Fuel Milestone 7",

			style: {
				visibility: "shown",
			},
		},
		91: {
			name: "Explosion",
			done() {
				return player.supernova.points.gte(1);
			},
			tooltip: "✅ Get Supernova Tier 1",
			goalTooltip: "❌ Get Supernova Tier 1",

			style() {
				return {
					"border-color": "#eaad22",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		92: {
			name: "Astro Particles",
			done() {
				return player.cosmicrays.points.gte(100);
			},
			tooltip: "✅ Get 100 Cosmic Rays",
			goalTooltip: "❌ Get 100 Cosmic Rays",

			style: {
				visibility: "shown",
			},
		},
		93: {
			name: "Energy",
			done() {
				return player.supernova.points.gte(2);
			},
			tooltip: "✅ Unlock Energy",
			goalTooltip: "❌ Unlock Energy",

			style() {
				return {
					"border-color": "#ddd600",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		94: {
			name: "10",
			done() {
				return hasMilestone("unstablefuel", 10);
			},
			tooltip: "✅ Get Unstable Rocket Fuel Milestone 10",
			goalTooltip: "❌ Get Unstable Rocket Fuel Milestone 10",

			style: {
				visibility: "shown",
			},
		},
		95: {
			name: "100%",
			done() {
				if (getBuyableAmount("darkmatter", 21) == 88) {
					return true;
				}
			},
			tooltip: "✅ Complete Dark Matter Buyable 4",
			goalTooltip: "❌ Complete Dark Matter Buyable 4",

			style: {
				visibility: "shown",
			},
		},
		96: {
			name: "Insane Gain",
			done() {
				return hasUpgrade("unstablefuel", 63);
			},
			tooltip: "✅ Get Unstable Rocket Fuel Upgrade 28",
			goalTooltip: "❌ Get Unstable Rocket Fuel Upgrade 28",

			style: {
				visibility: "shown",
			},
		},
		101: {
			name: "Darkness II",
			done() {
				return hasMilestone("supernova", 5);
			},
			tooltip: "✅ Get Supernova Tier 5",
			goalTooltip: "❌ Get Supernova Tier 5",

			style() {
				return {
					"border-color": "rgb(29, 8, 122)",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		102: {
			name: "Useless",
			done() {
				if (getBuyableAmount("darkmatter", 11).gte(250)) {
					return true;
				}
			},
			tooltip: "✅ Buy Darkmatter Buyable 1 250 Times",
			goalTooltip: "❌ Buy Darkmatter Buyable 1 250 Times",

			style: {
				visibility: "shown",
			},
		},
		103: {
			name: "Void",
			done() {
				return player.blackhole.points.gte(1);
			},
			tooltip: "✅ Get 1 Void",
			goalTooltip: "❌ Get 1 Void",

			style() {
				return {
					"border-color": "black",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		104: {
			name: "Money multiplier?",
			done() {
				return hasUpgrade("blackhole", 13);
			},
			tooltip: "✅ Get Black Hole Upgrade 3",
			goalTooltip: "❌ Get Black Hole Upgrade 3",

			style: {
				visibility: "shown",
			},
		},
		105: {
			name: "Gamble",
			done() {
				return player.blackhole.points.gte(1000);
			},
			tooltip: "✅ Get Black Hole Stage 3",
			goalTooltip: "❌ Get Black Hole Stage 3",

			style() {
				return {
					"border-color": "rgb(0, 29, 73)",
					"border-width": "3px",
					visibility: "shown",
				};
			},
		},
		106: {
			name: "Green Win",
			done() {
				if (
					player.blackhole.betColor == "GREEN" &&
					player.blackhole.rolledColor == "GREEN" &&
					player.blackhole.totalRolls >= 1
				)
					return true;
			},
			tooltip: "✅ Bet on green and win",
			goalTooltip: "❌ Bet on green and win",

			style: {
				visibility: "shown",
			},
		},
		111: {
			name: "Skill",
			done() {
				return (
					player.blackhole.winstreak.gte(3) && hasMilestone("blackhole", 6)
				);
			},
			tooltip: "✅ Get a 3 Winstreak",
			goalTooltip: "❌ Get a 3 Winstreak",

			style: {
				visibility: "shown",
			},
		},
		112: {
			name: "Skill Issue",
			done() {
				return (
					player.blackhole.losestreak.gte(3) && hasMilestone("blackhole", 6)
				);
			},
			tooltip: "✅ Get a 3 Losestreak",
			goalTooltip: "❌ Get a 3 Losestreak",

			style: {
				visibility: "shown",
			},
		},
		113: {
			name: "All in",
			done() {
				if (player.blackhole.betAmount == 1) return true;
			},
			tooltip: "✅ Put your Bet Amount to 100%",
			goalTooltip: "❌ Put your Bet Amount to 100%",

			style: {
				visibility: "shown",
			},
		},
		114: {
			name: "It's useful now",
			done() {
				return hasUpgrade("blackhole", 41);
			},
			tooltip: "✅ Get Black Hole Upgrade 16",
			goalTooltip: "❌ Get Black Hole Upgrade 16",

			style: {
				visibility: "shown",
			},
		},
		115: {
			name: "Rigged",
			done() {
				return hasUpgrade("blackhole", 51);
			},
			tooltip: "✅ Get Black Hole Upgrade 21",
			goalTooltip: "❌ Get Black Hole Upgrade 21",

			style: {
				visibility: "shown",
			},
		},
		116: {
			name: "Ultimate Boost",
			done() {
				return hasMilestone("unstablefuel", 22);
			},
			tooltip: "✅ Get Unstable Rocket Fuel Milestone 22",
			goalTooltip: "❌ Get Unstable Rocket Fuel Milestone 22",

			style: {
				visibility: "shown",
			},
		},
	},
});
