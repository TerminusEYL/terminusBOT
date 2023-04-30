const COMMANDS_NAMES = require("./commandsNames");

const AVAILABLE_ROLES = {
  [COMMANDS_NAMES.ROLES]: ["dps", "tank", "support"],
  [COMMANDS_NAMES.CLASSES]: ["assassin", "berserker", "brawler", "crusader", "cultist", "demon knight", "dragon knight", "druid", "earthguard", "elementalist", "enchanter", "guardian", "hunter",  "infuser", "priest", "ranger", "shadowblade", "shadowcaster", "spellblade", "warden"],
  [COMMANDS_NAMES.PROFESSIONS]: ["blacksmithing", "leatherworking", "weaponsmithing", "woodworking", "tailoring", "jewelery"],
}
module.exports = AVAILABLE_ROLES;