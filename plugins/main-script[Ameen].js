import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
    let Ameen = 'https://telegra.ph/file/aba12083d53dc30f5ccc9.jpg'
    
  let Nivedya = `
┌─❖
│「 *𝐊𝐄𝐈𝐊𝐎 𝐌𝐎𝐉𝐎🌩️*」
│
│     🛠️Made By
│              AmeenInt㋡ 
│         
└┬❖ 「 *⚠️ SCRIPT* 」
  │
  │☞ *💫OWNER:* ᴀᴍᴇᴇɴ xɴᴛ
  │
  │☞ *🌬️OPARATOR:* Balram
  │
  └─────────────┈ ⳹
  `
let Niya = "© 𝞓𝞛𝞢𝞢𝞜-𝙎𝞢𝞒"
conn.sendButton(m.chat, Nivedya, Niya, Ameen, [], null, [['BOT SCRIPT ㋡', 'https://GitHub.com/AmeenRepo/KEIKO-V5']], m)
m.react('🎟️')
}
handler.help = ['main']
handler.command = ['sc', 'repo']

export default handler
