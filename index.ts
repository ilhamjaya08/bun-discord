import { ActivityType, Client, Collection, Events, GatewayIntentBits } from 'discord.js'
import { token } from './config.json'
import { deployCommands } from './handlers/command'
import { commands } from './commands'
 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
 
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  client.user?.setActivity("Bun", { type: ActivityType.Playing });
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(token);