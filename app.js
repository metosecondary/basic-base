const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds
    ]
});

/**
 * Daha fazla "ready" olayı hakkında bilgiyi ornekler/ready_examples.js'de bulabilirsiniz.
 * once, on, off fonksiyonunlarının ne işe yaradığını bilmiyorsanız, ornekler/event_handlers.js'e bakabilirsiniz.
 */
client.once("ready", () => {
    console.log(`${client.user.displayName} olarak giriş yapıldı.`);
});

/* Olaylar hakkında detaylı bilgiyi Discord.js v14 dökümanlarında bulabilirsiniz: https://discord.js.org/docs/packages/discord.js/14.15.3/Events:Enum
Message sınıfının özelliklerini Discord.js v14 dökümanlarında bulabilirsiniz: https://discord.js.org/docs/packages/discord.js/14.15.3/Message:Class
*/
client.on("messageCreate", async (message) => {
    if (message.content.startsWith("!selam")) {
        await message.reply("Merhaba!");
    }
});

// Discord'a bağlanma
client.login(process.env.TOKEN); // TOKEN değerini .env dosyasında kendi botunuzun tokeni ile değişmeyi unutmayın.
