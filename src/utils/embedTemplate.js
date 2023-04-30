const { EmbedBuilder } = require('discord.js');

const embedTemplate = ({
  title = "Embed Template",
  bot = {}
} = {}) => {
  return new EmbedBuilder()
    .setColor(0x32a84e)
    .setTitle(title)
    .setTimestamp()
};

module.exports = embedTemplate;