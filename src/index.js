require('dotenv').config();
const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');

const { getCommandsList, embedGreetings, embedError} = require('./utils');
const config = require('./config/config.json');

if (process.argv.at(-1) === 'development') console.clear();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
	],

});
client.commands = new Collection();

const commandsList = getCommandsList();
commandsList.forEach(command => client.commands.set(command.data.name, command));

client.on(Events.Error, error => {
	console.error('A websocket connection encountered an error: ', error);
});

client.once('ready', (bot) => {
	console.log(`${bot.user.tag} is ready to work!`);
});

client.on('interactionCreate', async (interaction, ...rest) => {
	if (!interaction.isChatInputCommand()) return;

	if (!interaction.inGuild()) {
		return interaction.reply({ embeds: [embedError({ message: "You can't use commands outside a guild!" })], ephemeral: true })
	}

	const { id, username, discriminator, avatar } = client.user;
	const { user } = interaction;
	const botData = {
		id,
		username,
		discriminator,
		avatar,
	}

	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		console.log(`executing "/${interaction.commandName}" - ${user.username}#${user.discriminator}...`)
		await command.execute(interaction, botData);
	}
	catch (e) {
		console.error(e);
		await interaction.reply({ content: 'There was an error during command execution!', ephemeral: true });
	}
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
	const oldRoles = oldMember.roles.cache;
	const newRoles = newMember.roles.cache;

	// Member role ID
	if (!oldRoles.has("1066207097219453100") && newRoles.has("1066207097219453100")) {
		// general channel ID
		const channel = await client.channels.fetch("1066208192960401430");
		channel.send({ embeds: [embedGreetings({ userId: newMember.user.id })] })
	}
});


client.login(process.env.TOKEN).then(() => {
	client.user.setPresence({
		activities: [{
			name: "/classes /roles",
			type: 0,
		}],
		status: "online",
	})
});