const { EmbedBuilder } = require('discord.js');
const { COLORS } = require("../constants")

const embedError = ({ message = "Something went wrong while building summary..." } = {}) => {
  return new EmbedBuilder()
    .setColor(COLORS.RED)
    .setTitle("Failure")
    .setDescription(message)
    .setTimestamp()
};

module.exports = embedError;
