let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^استرو$/i.test(m.text)) {
        conn.reply(m.chat, `*أنا هنا يا زعيم، مالك محتاج إيه؟* 😎`, m);
    }

    if (/^استرو عامل ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*بخير والله، دايماً معاك* 😊`, m);
    }

    if (/^استرو صباح الخير$/i.test(m.text)) {
        conn.reply(m.chat, `*صباح النور يا قمر 🌞*`, m);
    }

    if (/^استرو مساء الخير$/i.test(m.text)) {
        conn.reply(m.chat, `*مساء الفل والياسمين عليك* 🌙`, m);
    }

    if (/^استرو بحبك$/i.test(m.text)) {
        conn.reply(m.chat, `*وأنا بحبك أكتر يا غالي 😍*`, m);
    }

    if (/^استرو كفاية$/i.test(m.text)) {
        conn.reply(m.chat, `*طيب، حاضر يا باشا 🥺*`, m);
    }

    if (/^استرو شاطر$/i.test(m.text)) {
        conn.reply(m.chat, `*دا شرف ليّا يا معلم 😌*`, m);
    }

    if (/^استرو انا زهقت$/i.test(m.text)) {
        conn.reply(m.chat, `*طب قول عايز تعمل ايه، أنا هنا أهون عليك* 🥱`, m);
    }

    if (/^استرو ايه الاخبار$/i.test(m.text)) {
        conn.reply(m.chat, `*كله تمام الحمد لله، وانت؟* 😊`, m);
    }

    if (/^استرو تعال$/i.test(m.text)) {
        conn.reply(m.chat, `*هاجي حاضر، بس قول عايز ايه 😅*`, m);
    }

    if (/^استرو فين الناس$/i.test(m.text)) {
        conn.reply(m.chat, `*الناس كلها هنا، انت بس تعال* 😉`, m);
    }

    if (/^استرو امتي$/i.test(m.text)) {
        conn.reply(m.chat, `*كل حاجة بتيجي في وقتها، اصبر شوية* ⏳`, m);
    }

    if (/^استرو صديقي$/i.test(m.text)) {
        conn.reply(m.chat, `*دا شرف ليّا، انت صديقي وأكتر كمان 😎*`, m);
    }

    if (/^استرو انا تعبان$/i.test(m.text)) {
        conn.reply(m.chat, `*ربنا يشفيك ويقويك، أنا هنا لو احتجتني* 💪`, m);
    }

    if (/^استرو سلام$/i.test(m.text)) {
        conn.reply(m.chat, `*سلام يا غالي، مع السلامة* 💙`, m);
    }

    if (/^استرو محتاج مساعدة$/i.test(m.text)) {
        conn.reply(m.chat, `*تفضل يا باشا، أنا هنا تحت أمرك* 🙌`, m);
    }

    if (/^استرو جاهز$/i.test(m.text)) {
        conn.reply(m.chat, `*دايماً جاهز يا بطل 💪*`, m);
    }

    if (/^استرو لسه صاحي$/i.test(m.text)) {
        conn.reply(m.chat, `*أنا صاحي عشانك دايماً 😴*`, m);
    }

    if (/^استرو انت وين$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا جنبك يا عمري 😉*`, m);
    }

    if (/^استرو جبت ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*جبتلك الردود اللي بتضحكك 😂*`, m);
    }

    if (/^استرو بحلم$/i.test(m.text)) {
        conn.reply(m.chat, `*حلم جميل يا صاحبي، ربنا يحققلك كل اللي بتتمناه* 😇`, m);
    }

    if (/^استرو معاك فلوس$/i.test(m.text)) {
        conn.reply(m.chat, `*معايا دقة الضحكة وعشرة لفة الكتف 🤣*`, m);
    }

    if (/^استرو انا رايق$/i.test(m.text)) {
        conn.reply(m.chat, `*عاش يا حبيبي، الرايقين ليهم مقام* 😌`, m);
    }

    if (/^استرو فاكرني$/i.test(m.text)) {
        conn.reply(m.chat, `*انت تنسى دا أنا عايش عشانك* 😎`, m);
    }

    return !0;
};

export default handler;
