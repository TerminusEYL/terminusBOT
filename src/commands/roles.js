const { SlashCommandBuilder } = require('discord.js');
const { embedTemplate, getRolesByCommandName, embedError } = require("../utils");
const { COMMANDS_NAMES } = require("../constants");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(COMMANDS_NAMES.ROLES)
    .setDescription("Basic roles breakdown of players.")
    .setDefaultMemberPermissions(0),
  execute: async (interaction, bot) => {
    const roles = getRolesByCommandName(interaction, COMMANDS_NAMES.ROLES).sort();

    const embed = embedTemplate({
      title: "Roles breakdown",
      bot,
    })

    const totalRoles = roles.reduce((acc, curr) => curr.membersCount + acc, 0)

    embed.addFields(
      { name: `Total: ${totalRoles}`, value: " " },
      ...roles.map(({ name, membersCount }) => ({name: `${name}‎ ‎ `, value: membersCount.toString(), inline: true}))
    )

    try {
      await interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (e) {
      await interaction.reply({ embeds: [embedError()], ephemeral: true });
      console.log(e);
    }
  }
}