let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^فين الناس$/i.test(m.text)) {
        conn.reply(m.chat, `*معرفش، الناس مابقوش يبانوا غير لما يحتاجوا حاجة 😅*`, m);
    }

    if (/^مش لاقي حد$/i.test(m.text)) {
        conn.reply(m.chat, `*احنا هنا، دايماً موجودين عشانك 💪*`, m);
    }

    if (/^خليك جدع$/i.test(m.text)) {
        conn.reply(m.chat, `*جدعان الدنيا كلها متجمعين هنا 👌*`, m);
    }

    if (/^ايه الجديد$/i.test(m.text)) {
        conn.reply(m.chat, `*ولا جديد، كله زي ما هو 🥱*`, m);
    }

    if (/^الجو برد$/i.test(m.text)) {
        conn.reply(m.chat, `*البس تقيل وسيبك من الكلام 🧥❄️*`, m);
    }

    if (/^فين الصحبة$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا يا معلم، جمبك على طول 🙌*`, m);
    }

    if (/^مش لاقي نفسي$/i.test(m.text)) {
        conn.reply(m.chat, `*دور كويس كده يمكن تلاقيها 💡*`, m);
    }

    if (/^محتاج نصيحة$/i.test(m.text)) {
        conn.reply(m.chat, `*افضل نصيحة هي اللي تيجي من جواك أنت ❤️*`, m);
    }

    if (/^بفكر فيك$/i.test(m.text)) {
        conn.reply(m.chat, `*ده انت اللي على بالي من زمان 💭💖*`, m);
    }

    if (/^عايز أضحك$/i.test(m.text)) {
        conn.reply(m.chat, `*افتح يوتيوب وشوف مقاطع تضحك 😹*`, m);
    }

    if (/^مش قادر أتحمل$/i.test(m.text)) {
        conn.reply(m.chat, `*ربنا يصبرك ويقويك يا بطل 💪*`, m);
    }

    if (/^الساعة كام$/i.test(m.text)) {
        conn.reply(m.chat, `*هات موبايلك وشوفها بنفسك يا نجم 😉*`, m);
    }

    if (/^أحبك$/i.test(m.text)) {
        conn.reply(m.chat, `*وانا بعشقك 😍*`, m);
    }

    if (/^لوحدي$/i.test(m.text)) {
        conn.reply(m.chat, `*مش لوحدك، احنا دايماً جنبك 🥰*`, m);
    }

    if (/^شوفوا الدنيا$/i.test(m.text)) {
        conn.reply(m.chat, `*الدنيا جميلة بوجودك 🌍💖*`, m);
    }

    if (/^حياتي كلها$/i.test(m.text)) {
        conn.reply(m.chat, `*انت اللي منور حياتي 💫*`, m);
    }

    if (/^اسمعني$/i.test(m.text)) {
        conn.reply(m.chat, `*قول وأنا سامعك بعناية 🎧*`, m);
    }

    if (/^فاضي ليه$/i.test(m.text)) {
        conn.reply(m.chat, `*مش فاضي، ده أنا مشغول فيك انت 😅*`, m);
    }

    if (/^أنا هنام$/i.test(m.text)) {
        conn.reply(m.chat, `*تصبح على خير وأحلام سعيدة 🌙*`, m);
    }

    if (/^أنا كويس$/i.test(m.text)) {
        conn.reply(m.chat, `*دايماً يا رب، كويس ومنور* ✨`, m);
    }

    if (/^إنت حد جامد$/i.test(m.text)) {
        conn.reply(m.chat, `*ده انت اللي مش عادي يا زعيم 🤩*`, m);
    }

    if (/^ليه بنسهر$/i.test(m.text)) {
        conn.reply(m.chat, `*عشان نفكر أكتر في اللي بنحبهم 😅*`, m);
    }

    if (/^ربنا يستر$/i.test(m.text)) {
        conn.reply(m.chat, `*آمين، ربنا يحمينا كلنا 🙏*`, m);
    }

    if (/^هتعمل ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*هشوف اليوم هيجيب إيه 😎*`, m);
    }

    return !0;
};

export default handler;
