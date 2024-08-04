/**
 * Burada yazılanlar sadece örnektir, bu dosyayı çalıştırmayı denemeyin.
 * Burada yazılanları app.js'de "ready" olayında uygulayabilirsiniz.
 */

/**
 * Botun durumunu ayarlama [Rahasız Etmeyin, Çevrim İçi (Bu varsayılandır), Boşta, Görünmez]
 * once fonksiyonunun ne işe yaradığını bilmiyorsanız, ornekler/event_handlers.js'e bakabilirsiniz.
 */
client.once("ready", () => {
    // Herhangi birini (yalnızca 1 tanesini) botunuzda kullanabilirsiniz.
    client.user.setStatus("dnd"); // Rahatsız Etmeyin
    client.user.setStatus("idle"); // Boşta
    client.user.setStatus("online"); // Bu zaten varsayılandır, belirtmenize gerek yoktur.
    client.user.setStatus("invisible"); // Botunuz birden fazla sunucuda ise bunu botu test ederken kullanabilirsiniz, size kalmış.
});

// 2. Örnek : Özel Durum Belirleme (diğer adıyla Aktivite)
client.once("ready", () => {
    // Bot aktif olduğunda, durumunda " Yaşasın anime kızları! Oynuyor " yazısı görünecektir.
    client.user.setActivity({name: "Yaşasın anime kızları!" /*Buraya istediğiniz şeyi yazabilirsiniz.*/, type: ActivityType.Playing});
    // Diğer aktivite türleri:
    ActivityType.Listening // dinliyor
    ActivityType.Streaming // yayınlıyor
    ActivityType.Watching // izliyor
    ActivityType.Competing // yarışmasında yarışıyor
    ActivityType.Custom // Kullanıcıların profil ayarlarından koyduğu "Özel Durum Belirle" ile aynıdır.
});

// 3. Örnek : Belirli bir süreye göre değişen aktivite (Kolaylık açısından 2. yolu öneririm)
// setStatus'da kullanacaksanız setInterval dışında kullanmayı unutmayın.
client.once("ready", () => {
    // 1. yol, rastgele indis döndürme
    setInterval(() => {
        const oyunlar = ["Yaşasın anime kızları!", "meto1558'in base'i"];
        const oyun = Math.floor(Math.random() * oyunlar.length) + 1; // Liste arasından rastgele bir nesne indisi çevirir
        client.user.setActivity({name: oyunlar[oyun] /*Rastgele indise göre nesne seçimi*/, type: ActivityType.Custom});
    }, 5000 /*5 saniye, bu süreyi arttırabilir veya azaltabilirsiniz.*/);

    // 2. yol, pyrandom modülünü kullanma
    // pyrandom kurulu değilse " npm install pyrandom " komutu ile kurabilirsiniz.
    // pyrandom'u içeri aktarma:
    const { random } = require("pyrandom"); // İçeri aktarma işlemleri genelde dosyanın en yukarısında yapılır, isterseniz app.js'de en yukarı da taşıyabilirsiniz.
    setInterval(() => {
        const oyunlar = ["Yaşasın anime kızları!", "meto1558'in base'i"];
        const oyun = random.choice(oyunlar); // Liste arasından rastgele seçim yapar
        client.user.setActivity({name: oyun, type: ActivityType.Custom});
    }, 5000);
});
