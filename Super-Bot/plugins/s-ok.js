import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫'
let nombre2 = 'xd'
 
const s = [
'https://media.makeameme.org/created/uh-ok-5ca824.jpg',
'https://i.pinimg.com/originals/9a/da/00/9ada0026337e175c787b9b47a3cd3de5.jpg',
'https://media1.giphy.com/media/QYwB8ai7mtORGRAxJZ/giphy.gif?cid=ecf05e47onuz2cet71x6d3wizozphrhkow9u7ucskq1uzhkw&rid=giphy.gif&ct=g',
'data:image/jpeg;base64,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',
'https://i.gifer.com/3Pr0.gif',
'https://i.gifer.com/9aM.gif',
'https://i.gifer.com/3BBB.gif',
'https://i.gifer.com/Xi9B.gif'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
 
 }
handler.customPrefix = /ok|de acuerdo|okey|okay|estoy de acuerdo|deacuerdo|entiendo|me parece bien|muy bien|👍|🤝|✌️|👌/i 
handler.command = new RegExp
handler.exp = 50
export default handler
