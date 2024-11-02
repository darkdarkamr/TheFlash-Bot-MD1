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
    const ytResults = await searchYouTube(args.join(' '));
    if (!ytResults.length) throw new Error("❗ لم يتم العثور على نتائج.");

    const ytResult = ytResults[0];
    const messageContent = {
      text: `🔍 نتيجة البحث: ${text}\n📄 العنوان: ${ytResult.title}\n👁️ المشاهدات: ${formatNumber(ytResult.views)}\n🔗 الرابط: ${ytResult.url}`,
      thumbnail: ytResult.thumbnail,
    };

    await sendInteractiveMessage(conn, m.chat, messageContent, usedPrefix, ytResult.url);

  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || "حدث خطأ غير متوقع.";
    await conn.sendMessage(m.chat, { text: `❗ خطأ: ${errorMessage}` }, { quoted: m });
  }
};

const sendInteractiveMessage = async (conn, chat, content, prefix, url) => {
  const thumbnailMedia = await prepareWAMessageMedia({ image: { url: content.thumbnail } }, { upload: conn.waUploadToServer });

  let msg = generateWAMessageFromContent(chat, {
    templateMessage: {
      hydratedTemplate: {
        imageMessage: thumbnailMedia.imageMessage,
        hydratedContentText: content.text,
        hydratedFooterText: "© منار بوت",
        hydratedButtons: [
          {
            quickReplyButton: {
              displayText: "🎶 تحميل صوتي",
              id: `${prefix}mp3 ${url}`
            }
          },
          {
            quickReplyButton: {
              displayText: "🎥 تحميل فيديو",
              id: `${prefix}mp4 ${url}`
            }
          },
        ]
      }
    }
  }, { userJid: conn.user.jid, quoted: chat });

  await conn.sendMessage(chat, { react: { text: '✔️', key: m.key } });
  await conn.relayMessage(chat, msg.message, { messageId: msg.key.id });
};

const searchYouTube = async (query) => {
  const searchResults = await yts({ query, hl: 'ar', gl: 'AR' });
  return searchResults.videos;
};

const formatNumber = (number) => {
  return number.toLocaleString('ar-EG');
};

handler.command = /^(شغل|mp3|mp4)$/i;
export default handler;
