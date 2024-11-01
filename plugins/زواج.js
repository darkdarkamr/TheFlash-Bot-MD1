let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps.getRandom();
    let b;

    // الحصول على منشن عشوائي آخر يختلف عن الأول
    do {
        b = ps.getRandom();
    } while (b === a);

    // صياغة الرسالة بتعبيرات أكثر جاذبية
    m.reply(`🌟 *مفاجأة جميلة اليوم!*

🎊 *للعريس: ${toM(a)}، ألف مبروك!* 🥳✨
🎉 *للعروسة: ${toM(b)}، ألف مبروك! 🎊* 💖

*ملاحظة: هذه مجرد مزحة عشوائية للمرح والفكاهة! إذا لم يعجبك الأمر، يمكنك تجاهلها 💗😊*

*استمتعوا بالجو! 🎈*`, null, {
        mentions: [a, b]
    });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'زواج'];
handler.group = true;

export default handler;
