let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^احا$/i.test(m.text)) {
        conn.reply(m.chat, `*بل التكت بتاعها 😹*`, m);
        await conn.sendMessage(m.chat, { react: { text: '🐤', key: m.key } });
    }

    if (/^عبيط|يا عبيط$/i.test(m.text)) {
        conn.reply(m.chat, `*بطل تنمر يسطا 🗿*`, m);
    }

    if (/^منور|منوره$/i.test(m.text)) {
        conn.reply(m.chat, `*بنوري 🥺💔*`, m);
        await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key } });
    }

    if (/^مين عمك$/i.test(m.text)) {
        conn.reply(m.chat, `*عمي هو ادهم الكبير طبعا 🫶🏻💗*`, m);
    }

    if (/^بوت$/i.test(m.text)) {
        conn.reply(m.chat, `*اسمي استرو*`, m);
        await conn.sendMessage(m.chat, { react: { text: '🐤', key: m.key } });
    }

    if (/^يابوت|يا بوت$/i.test(m.text)) {
        conn.reply(m.chat, `*قولت اسمي استرو🧚🏻‍♂️*`, m);
        await conn.sendMessage(m.chat, { react: { text: '😒', key: m.key } });
    }

    if (/^استرو$/i.test(m.text)) {
        conn.reply(m.chat, '*قلب استرو*', m);
        await conn.sendMessage(m.chat, { react: { text: '💗', key: m.key } });
    }

    if (/^بوت خرا|بوت زفت|خرا عليك$/i.test(m.text)) {
        conn.reply(m.chat, '*🗿 دزها يلا انا عمك*', m);
    }

    if (/^بحبك|احبك$/i.test(m.text)) {
        conn.reply(m.chat, `*بحبك اكتر 😔💗*`, m);
    }

    if (/^خخخ|خخخخ|خخخخخ|خخخخخخ|خخخخخخخ$/i.test(m.text)) {
        conn.reply(m.chat, '*خوخ ومنجا وسوق العبور 🦦*', m);
    }

    if (/^مصر/i.test(m.text)) {
        conn.reply(m.chat, `*ام الدنيا 🐧⚡*`, m);
    }

    if (/^امزح|بهزر$/i.test(m.text)) {
        conn.reply(m.chat, `*هزعلك لو هزرت معايا تاني 🗿*`, m);
    }

    if (/^في ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*معرفش انت تعرف؟ 🗿*`, m);
    }

    if (/^تست$/i.test(m.text)) {
        conn.reply(m.chat, `*شغال يحب لسه مموتش🐦*`, m);
    }

    if (/^بتعمل ايه دلوقت$/i.test(m.text)) {
        conn.reply(m.chat, `*بلعب بليه* 😹`, m);
    }

    if (/^انا جيت$/i.test(m.text)) {
        conn.reply(m.chat, `*نورت البيت😂❤️*`, m);
        await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } });
    }

    if (/^اخرس|اسكت$/i.test(m.text)) {
        conn.reply(m.chat, `*من انت علشان تسكتني😒*`, m);
    }

    if (/^متيجي|لف$/i.test(m.text)) {
        conn.reply(m.chat, `مليش في الخشن😹`, m);
    }

    if (/^ملل|مللل|ملللل$/i.test(m.text)) {
        conn.reply(m.chat, `*عارفين ف اسكت احسن لك🥱*`, m);
    }

    if (/^السلام عليكم|السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته$/i.test(m.text)) {
        conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته♥*`, m);
    }

    if (/^🤖$/i.test(m.text)) {
        conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m);
    }

    if (/^انا مبضون$/i.test(m.text)) {
        conn.reply(m.chat, `اكتر منك😔💗`, m);
    }

    if (/^اه$/i.test(m.text)) {
        conn.reply(m.chat, `*الشارع الي وراه 😹*`, m);
    }

    if (/^نعم$/i.test(m.text)) {
        conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m);
    }

    if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text)) {
        conn.reply(m.chat, `*الحمد لله و انت ☺️*`, m);
    }

    if (/^تعرف ادهم$/i.test(m.text)) {
        conn.reply(m.chat, `*صديق لايت الروح بل الروح ☺️*`, m);
    }

    return !0;
};

export default handler;
