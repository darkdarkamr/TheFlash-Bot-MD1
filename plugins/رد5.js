let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^عندي سؤال$/i.test(m.text)) {
        conn.reply(m.chat, `*اسأل يا باشا، أنا هنا!* 🤔`, m);
    }

    if (/^انت احلى$/i.test(m.text)) {
        conn.reply(m.chat, `*أنت اللي احلى يا زعيم 🥰*`, m);
    }

    if (/^بطل دلع$/i.test(m.text)) {
        conn.reply(m.chat, `*الدلع ملوش حدود 😏*`, m);
    }

    if (/^رايح فين$/i.test(m.text)) {
        conn.reply(m.chat, `*رايح على المكان اللي تفتح فيه صدري 😂*`, m);
    }

    if (/^يلا نخرج$/i.test(m.text)) {
        conn.reply(m.chat, `*يلا بينا، وخلينا نغير جو!* 🌍`, m);
    }

    if (/^محتاج راحة$/i.test(m.text)) {
        conn.reply(m.chat, `*خدلك شوية هوا واستجم* 🌬️`, m);
    }

    if (/^بقولك$/i.test(m.text)) {
        conn.reply(m.chat, `*بقولك إيه؟ 🤔*`, m);
    }

    if (/^حاجة غريبة$/i.test(m.text)) {
        conn.reply(m.chat, `*دي حاجة هتبقى حكاية لو حصلت* 😆`, m);
    }

    if (/^يوم جميل$/i.test(m.text)) {
        conn.reply(m.chat, `*والأجمل بيك يا حبيبي 💖*`, m);
    }

    if (/^احكيلي$/i.test(m.text)) {
        conn.reply(m.chat, `*هحكي لك عن مغامرات استرو 🤭*`, m);
    }

    if (/^حد عاوزني$/i.test(m.text)) {
        conn.reply(m.chat, `*الكل عاوزك، انت نجمنا* 🌟`, m);
    }

    if (/^انت فين يا استرو$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا في قلب الجروب! ❤️*`, m);
    }

    if (/^قول كلمة$/i.test(m.text)) {
        conn.reply(m.chat, `*الكلمة الحلوة تفتح الأبواب!* 🌺`, m);
    }

    if (/^تحب تشوف$/i.test(m.text)) {
        conn.reply(m.chat, `*تحب تشوف ايه؟ أنا هنا للعرض!* 🎭`, m);
    }

    if (/^فيه عفريت$/i.test(m.text)) {
        conn.reply(m.chat, `*العفريت فين؟ اجيبه لك!* 👻`, m);
    }

    if (/^انت تعرفني$/i.test(m.text)) {
        conn.reply(m.chat, `*بالطبع، انت النجم هنا!* 🌟`, m);
    }

    if (/^بتحب الطبيعة$/i.test(m.text)) {
        conn.reply(m.chat, `*أنا عاشق للطبيعة 🌳💚*`, m);
    }

    if (/^خليها على الله$/i.test(m.text)) {
        conn.reply(m.chat, `*دايماً، الثقة في الله كبيرة!* 🙏`, m);
    }

    if (/^محتاج اجازة$/i.test(m.text)) {
        conn.reply(m.chat, `*اجازة مفتوحة على حسابي! 🌴*`, m);
    }

    if (/^بغني$/i.test(m.text)) {
        conn.reply(m.chat, `*غني وانا معاك، يلا نكمل!* 🎤`, m);
    }

    if (/^اكره الملل$/i.test(m.text)) {
        conn.reply(m.chat, `*الملل عدو المرح، يلا نضحك!* 😂`, m);
    }

    return !0;
};

export default handler;
