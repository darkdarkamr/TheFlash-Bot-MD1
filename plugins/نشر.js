import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    let img = await (await fetch(`https://i.ibb.co/9Wjgkm3/Menu.jpg`)).buffer()
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)

    // عرّف المتغيرات
    let group = ""
    let canal = ""
    let textbot = "*\`『 دعموني علشان اقدر استمر وفضل معاكو 』\`*"

    let txt = `*أهلاً، أنا بدعوك تنضم للجروبات الرسمية للبوت عشان تتفاعل مع المجتمع :D*

1- 【 ✯ astro-𝐵O𝑇 ✰ 】
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ اللينك مش شغال؟ ادخل هنا!

قناة :
*✰* ${canal}

> 🚩 ${textbot}`

    await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, canal)
}

handler.help = ['جروبات']
handler.tags = ['رئيسية']
handler.command = /^(نشر)$/i
export default handler
