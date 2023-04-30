require('dotenv').config();
const { REST, Routes } = require('discord.js');
const { applicationID } = require('../config/config.json');

const rest = new REST().setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(applicationID), { body: [] })
	.then(() => console.log('Successfully removed all application commands.'))
	.catch(console.error);