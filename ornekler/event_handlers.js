/**
 * Burada yazılanlar sadece örnektir, bu dosyayı çalıştırmayı denemeyin.
 * Burada yazılanları app.js'de uygulayabilirsiniz.
 * Olaylar hakkında daha fazla bilgi için Discord.js v14 dökümanlarını inceleyebilirsiniz: https://discord.js.org/docs/packages/discord.js/14.15.3/Events:Enum
 */

client.once("ready", () => {}); // once ile dinlenen bir olay yalnızca 1 kere çalışır.

client.on("messageCreate", async (message) => {}) // on, bot aktif olduğu sürece dinlenen olaya göre her zaman tetiklenir.

client.off("messageCreate", async (message) => {}) // off, dinlenen bir olayı devre dışı bırakır.
