let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^احا$/i.test(m.text)) {
        conn.reply(m.chat, `*بل التكت بتاعها 😹*`, m);
        await conn.sendMessage(m.chat, { react: { text: '🐤', key: m.key } });
    }

    if (/^انت ازاي$/i.test(m.text)) {
        conn.reply(m.chat, `*بفضل الله يا نجم* 😌`, m);
    }

    if (/^عامل ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*الحمد لله تمام، وانت؟* 😊`, m);
    }

    if (/^مساء الخير$/i.test(m.text)) {
        conn.reply(m.chat, `*مساء الفل يا ورد 🌹*`, m);
    }

    if (/^بحبك$/i.test(m.text)) {
        conn.reply(m.chat, `*وأنا كمان يا حب 🥰*`, m);
    }

    if (/^يا صباح الخير$/i.test(m.text)) {
        conn.reply(m.chat, `*صباح الفل والياسمين ☀️*`, m);
    }

    if (/^فينك$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا يا معلم* 😎`, m);
    }

    if (/^الله$/i.test(m.text)) {
        conn.reply(m.chat, `*الله أكبر!* 🌹`, m);
    }

    if (/^ماشي$/i.test(m.text)) {
        conn.reply(m.chat, `*ماشي يا زعيم* 🐧`, m);
    }

    if (/^سلام$/i.test(m.text)) {
        conn.reply(m.chat, `*مع السلامة يا بطل 💪*`, m);
    }

    if (/^انا هنا$/i.test(m.text)) {
        conn.reply(m.chat, `*نورت المكان* 😎`, m);
    }

    if (/^ها$/i.test(m.text)) {
        conn.reply(m.chat, `*قول يا باشا* 🤔`, m);
    }

    if (/^ايه الاخبار$/i.test(m.text)) {
        conn.reply(m.chat, `*كلو تمام الحمد لله* ☺️`, m);
    }

    if (/^ايوه$/i.test(m.text)) {
        conn.reply(m.chat, `*ماشي يا زعيم* ✌️`, m);
    }

    if (/^بحاول$/i.test(m.text)) {
        conn.reply(m.chat, `*استمر يا وحش 💪*`, m);
    }

    if (/^روحت فين$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا والله* 😂`, m);
    }

    if (/^بطل$/i.test(m.text)) {
        conn.reply(m.chat, `*دا شرف ليّ 😎*`, m);
    }

    if (/^خدلك راحة$/i.test(m.text)) {
        conn.reply(m.chat, `*راحة ايه يا رايق؟* 😴`, m);
    }

    if (/^مش مشكلة$/i.test(m.text)) {
        conn.reply(m.chat, `*ولا يهمك* 😉`, m);
    }

    if (/^انت مين$/i.test(m.text)) {
        conn.reply(m.chat, `*انا استرو البوت!* 🤖`, m);
    }

    return !0;
};

export default handler;
