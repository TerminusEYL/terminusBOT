const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("professions")
    .setDescription("Update players roles list message (DPS, Tank, Support).")
    .setDefaultMemberPermissions(0),
  execute: async (interaction) => {
    console.log(interaction);
    // const roles = guild.roles.cache;
  }
}