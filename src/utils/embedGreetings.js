const { EmbedBuilder } = require('discord.js');
const  { COLORS } = require("../constants")
const embedGreetings = ({
  userId
} = {}) => {
  return new EmbedBuilder()
    .setColor(COLORS.GREEN)
    .setTitle("New member!")
    .setTimestamp()
    .setDescription(`Welcome <@${userId}>!\nThanks for joining in!`)
};

module.exports = embedGreetings;