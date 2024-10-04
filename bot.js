import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

config();
console.log(process.env.TOKEN);

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log("Quack!")
})

try {
  await client.login(process.env.TOKEN);
} catch (error) {
  console.error("Failed to login to Discord:", error);
}