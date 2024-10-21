const handler = (m) => m;
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || 'default'; // اللغة الافتراضية في حال لم يتم تحديدها
  let _translate;

  try {
    _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  } catch (e) {
    console.error(`Language file for ${idioma} not found, falling back to default.`);
    _translate = JSON.parse(fs.readFileSync('./language/default.json')); // لغة افتراضية
  }

  const tradutor = _translate.plugins._antiarab;

  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};

  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212')) {
      m.reply(tradutor.texto1);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265')) {
      m.reply(tradutor.texto2);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92')) {
      m.reply(tradutor.texto3);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};

export default handler;
