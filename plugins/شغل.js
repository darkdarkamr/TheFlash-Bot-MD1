import axios from 'axios';

const handler = async (m, { text, conn }) => {
  if (!text) {
    await conn.sendMessage(m.chat, { text: `❗ من فضلك أدخل نص للسؤال.` }, { quoted: m });
    return;
  }

  await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } });

  try {
    const response = await getAIResponse(text);
    await conn.sendMessage(m.chat, { text: response }, { quoted: m });
  } catch (error) {
    console.error(error);  // طباعة الخطأ في وحدة التحكم للتصحيح
    await conn.sendMessage(m.chat, { text: `❗ خطأ: ${error.message}` }, { quoted: m });
  }
};

// دالة لإرسال النص إلى الذكاء الاصطناعي والحصول على الرد باستخدام gpt-3.5-turbo
const getAIResponse = async (prompt) => {
  const apiKey = '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';  // ضع مفتاح API الخاص بك هنا مباشرةً
  const url = 'https://api.openai.com/v1/chat/completions';

  const response = await axios.post(url, {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 100,
    temperature: 0.7,
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].message.content.trim();
};

// تعريف الأمر لتشغيل الذكاء الاصطناعي
handler.command = /^(ai|ذكاء|اسأل)$/i;
export default handler;
