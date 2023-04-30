const { SlashCommandBuilder } = require('discord.js');
const { embedTemplate, getRolesByCommandName, embedError } = require("../utils");
const { COMMANDS_NAMES } = require("../constants");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(COMMANDS_NAMES.CLASSES)
    .setDescription("Aggregated classes breakdown.")
    .setDefaultMemberPermissions(0),
  execute: async (interaction, bot) => {
    const roles = getRolesByCommandName(interaction, COMMANDS_NAMES.CLASSES).sort();

    const embed = embedTemplate({
      title: "Classes breakdown",
      bot,
    })

    const totalRoles = roles.reduce((acc, curr) => curr.membersCount + acc, 0)

    embed.addFields(
      { name: "Total:", value: roles.map(({ name, emoji }) => `<:${name.replaceAll(" ", "_")}:${emoji}> ‎ ‎ ${name}`).join("\n"), inline: true },
      { name: `‎ ‎ ‎ ‎ ‎ ‎ ${totalRoles}`, value: roles.map(({ membersCount }) => `‎ ‎ ‎ ‎ ‎ ‎ ${membersCount}`).join("\n"), inline: true },
    )

    try {
      await interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (e) {
      await interaction.reply({ embeds: [
				embedError()
			], ephemeral: true });
      console.log(e);
    }
  }
}