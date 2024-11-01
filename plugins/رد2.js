let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];

    if (/^تمام$/i.test(m.text)) {
        conn.reply(m.chat, `*تمام يا ريس* 😉`, m);
    }

    if (/^حبيبي$/i.test(m.text)) {
        conn.reply(m.chat, `*يا حبيبي يا غالي* 🥰`, m);
    }

    if (/^فين الناس$/i.test(m.text)) {
        conn.reply(m.chat, `*الناس هنا يا غالي* 😌`, m);
    }

    if (/^صباح الخير$/i.test(m.text)) {
        conn.reply(m.chat, `*صباح النور والسرور* ☀️`, m);
    }

    if (/^تحياتي$/i.test(m.text)) {
        conn.reply(m.chat, `*تحياتي ليك يا باشا* 🤗`, m);
    }

    if (/^زيك$/i.test(m.text)) {
        conn.reply(m.chat, `*الحمد لله يا صاحبي، وأنت؟* 😊`, m);
    }

    if (/^أهلا$/i.test(m.text)) {
        conn.reply(m.chat, `*أهلا بيك* 🌸`, m);
    }

    if (/^متشكر$/i.test(m.text)) {
        conn.reply(m.chat, `*العفو يا محترم* 😊`, m);
    }

    if (/^إزيك$/i.test(m.text)) {
        conn.reply(m.chat, `*كويس الحمد لله* 😄`, m);
    }

    if (/^لو سمحت$/i.test(m.text)) {
        conn.reply(m.chat, `*تفضل يا باشا* 🙏`, m);
    }

    if (/^فين$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا اهو* 🤔`, m);
    }

    if (/^ولا يهمك$/i.test(m.text)) {
        conn.reply(m.chat, `*ولا يهمك، كله تمام* ✌️`, m);
    }

    if (/^تحب ايه$/i.test(m.text)) {
        conn.reply(m.chat, `*بحب الكلمة الحلوة* 😊`, m);
    }

    if (/^انا جاي$/i.test(m.text)) {
        conn.reply(m.chat, `*يا هلا بيك* 🎉`, m);
    }

    if (/^شكرا$/i.test(m.text)) {
        conn.reply(m.chat, `*العفو، دا واجب* 🤗`, m);
    }

    if (/^مش فاهم$/i.test(m.text)) {
        conn.reply(m.chat, `*محتاج توضيح أكتر؟* 🤔`, m);
    }

    if (/^انا زي القمر$/i.test(m.text)) {
        conn.reply(m.chat, `*فعلاً، القمر محتاج يخاف منك* 😅`, m);
    }

    if (/^اقفل$/i.test(m.text)) {
        conn.reply(m.chat, `*مش هقفل لحد ما تقولي معلش 😜*`, m);
    }

    if (/^سلام عليكم$/i.test(m.text)) {
        conn.reply(m.chat, `*وعليكم السلام، يا هلا بيك* ❤️`, m);
    }

    if (/^اهلا وسهلا$/i.test(m.text)) {
        conn.reply(m.chat, `*أهلا وسهلا بيك دايماً* 😊`, m);
    }

    if (/^عايز حاجة$/i.test(m.text)) {
        conn.reply(m.chat, `*لو محتاج مساعدة، أنا موجود* 💪`, m);
    }

    if (/^فينك$/i.test(m.text)) {
        conn.reply(m.chat, `*هنا معاك دايماً* 😌`, m);
    }

    if (/^ايه ده$/i.test(m.text)) {
        conn.reply(m.chat, `*ده اللي بقولك عليه* 🤨`, m);
    }

    if (/^ياااا$/i.test(m.text)) {
        conn.reply(m.chat, `*مالك مستغرب ليه؟* 😅`, m);
    }

    if (/^امال$/i.test(m.text)) {
        conn.reply(m.chat, `*امال ايه؟ احكيلي* 🤔`, m);
    }

    return !0;
};

export default handler;
