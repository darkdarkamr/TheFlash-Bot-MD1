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
    await conn.sendMessage(m.chat, { text: `❗ خطأ: حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.` }, { quoted: m });
  }
};

// دالة لإرسال النص إلى الذكاء الاصطناعي والحصول على الرد
const getAIResponse = async (prompt) => {
  const apiKey = 'sk-proj-1Bj3BbtfFPWEisffdLp9f3FBObQDfVq0u2bgs_wflxBkvc1no7zGCmTVTK69ah7WJjbO4mWaNo6q3oKLMy3484JpaNSMuy2Wr60ppU9KXsB9LeTJsEXAZDnu1CNo6q3oKLMy3484JpaNSMuy2WufIS4jKTkA';  // ضع مفتاح API الخاص بك هنا
  const url = 'https://api.openai.com/v1/completions';

  const response = await axios.post(url, {
    model: "text-davinci-003", // يمكن تغيير النموذج حسب ما هو متاح لديك
    prompt,
    max_tokens: 100,
    temperature: 0.7,
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data.choices[0].text.trim();
};

// تعريف الأمر لتشغيل الذكاء الاصطناعي
handler.command = /^(ai|ذكاء|اسأل)$/i;
export default handler;
