const { COMMANDS_NAMES, AVAILABLE_ROLES } = require("../constants")

const getRolesByCommandName = (interaction, commandName) => {
  if (!interaction || !commandName || !interaction.guild) {
    throw new Error(JSON.stringify({interaction, commandName}, null, 2));
  }

  if (!Object.values(COMMANDS_NAMES).includes(commandName)) {
    throw new Error(`'${commandName}' doesn't exist on commands list!`);
  }

  const roles = interaction.guild.roles.cache;
  const emojis = interaction.guild.emojis.cache;
  const filteredRoles = roles.filter(({ name }) => AVAILABLE_ROLES[commandName].includes(name.toLowerCase()));


  return filteredRoles.map(role => ({
    ...role,
    membersCount: role.members.size,
    emoji: emojis.find(emoji => emoji.name.toLowerCase() === role.name.toLowerCase().replaceAll(" ", "_"))?.id,
  }))
}

module.exports = getRolesByCommandName;