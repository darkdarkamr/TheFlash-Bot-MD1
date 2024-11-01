import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { text: `❗ يرجى إدخال نص للبحث.\nمثال:\n${usedPrefix + command} القرآن الكريم` }, { quoted: m });
    return;
  }

  await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const yt_play = await search(args.join(' '));
    const yt_result = yt_play[0];

    const messageContent = {
      text: `نتيجة البحث عن : ${text}\nالعنوان: ${yt_result.title}\nالمشاهدات: ${MilesNumber(yt_result.views)}\nالرابط: ${yt_result.url}`,
      thumbnail: yt_result.thumbnail,
    };

    await sendInteractiveMessage(conn, m.chat, messageContent, usedPrefix, yt_result.url);

  } catch (error) {
    await conn.sendMessage(m.chat, { text: `❗ خطأ أثناء البحث. تأكد من النص أو الرابط.` }, { quoted: m });
  }
};

const sendInteractiveMessage = async (conn, chat, content, prefix, url) => {
  const messa = await prepareWAMessageMedia({ image: { url: content.thumbnail } }, { upload: conn.waUploadToServer });

  let msg = generateWAMessageFromContent(chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: { text: content.text },
          footer: { text: `© Bot` },
          header: {
            hasMediaAttachment: true,
            imageMessage: messa.imageMessage,
          },
          nativeFlowMessage: {
            buttons: [
              { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'صوتي', id: `${prefix}mp3 ${url}` }) },
              { name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'فيديو', id: `${prefix}mp4 ${url}` }) }
            ],
            messageParamsJson: "",
          },
        },
      },
    },
  }, { userJid: conn.user.jid, quoted: chat });

  await conn.sendMessage(chat, { react: { text: '✔️', key: m.key } });
  await conn.relayMessage(chat, msg.message, { messageId: msg.key.id });
};

const search = async (query) => {
  const searchResults = await yts({ query, hl: 'ar', gl: 'AR' });
  return searchResults.videos;
};

const MilesNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

handler.command = /^(شغل|mp3|mp4)$/i;
export default handler;
