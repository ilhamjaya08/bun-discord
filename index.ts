import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js'
import { token } from './config.json'
 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
 
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  client.user?.setActivity("Bun", { type: ActivityType.Playing });
});

client.login(token);