import yts from 'yt-search';
import ytdl from 'ytdl-core';
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { text: `❗ من فضلك أدخل كلمات البحث.\nمثال:\n${usedPrefix + command} فيروز - نسم علينا الهوى` }, { quoted: m });
    return;
  }

  // عرض رد انتظاري للمستخدم
  await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

  try {
    // البحث عن الأغنية أو الفيديو على يوتيوب
    const results = await searchYouTube(text);
    if (!results.length) throw new Error("❗ لم يتم العثور على نتائج.");

    const result = results[0];  // اختيار أول نتيجة

    const messageContent = {
      text: `🎶 نتيجة البحث عن "${text}":\n\n*العنوان*: ${result.title}\n*المشاهدات*: ${formatNumber(result.views)}\n*الرابط*: ${result.url}`,
      thumbnail: result.thumbnail,
    };

    await sendInteractiveMessage(conn, m.chat, messageContent, usedPrefix, result.url);

  } catch (error) {
    const errorMessage = error.message || "حدث خطأ غير متوقع أثناء التحميل.";
    await conn.sendMessage(m.chat, { text: `❗ خطأ: ${errorMessage}` }, { quoted: m });
  }
};

// دالة لإرسال رسالة تفاعلية مع أزرار التحميل (صوت أو فيديو)
const sendInteractiveMessage = async (conn, chat, content, prefix, url) => {
  const thumbnailMedia = await prepareWAMessageMedia({ image: { url: content.thumbnail } }, { upload: conn.waUploadToServer });

  const msg = generateWAMessageFromContent(chat, {
    templateMessage: {
      hydratedTemplate: {
        imageMessage: thumbnailMedia.imageMessage,
        hydratedContentText: content.text,
        hydratedFooterText: "© منار بوت - تحميل من يوتيوب",
        hydratedButtons: [
          {
            quickReplyButton: {
              displayText: "🎵 تحميل صوت",
              id: `${prefix}mp3 ${url}`
            }
          },
          {
            quickReplyButton: {
              displayText: "📹 تحميل فيديو",
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

// دالة للبحث عن فيديوهات يوتيوب بناءً على الكلمات المفتاحية
const searchYouTube = async (query) => {
  const searchResults = await yts({ query, hl: 'ar', gl: 'AR' });
  return searchResults.videos;
};

// دالة لتنسيق أعداد المشاهدات
const formatNumber = (number) => {
  return number.toLocaleString('ar-EG');
};

// تعريف الأوامر المتاحة
handler.command = /^(شغل|mp3|mp4)$/i;
export default handler;
