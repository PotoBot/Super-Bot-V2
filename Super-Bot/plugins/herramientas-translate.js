import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `${mg}𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙎𝙀 𝙐𝙎𝘼 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙈𝘼𝙉𝙀𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es hello*\n\n𝙄𝘿𝙄𝙊𝙈𝘼𝙎 𝘼𝘿𝙈𝙄𝙏𝙄𝘿𝙊𝙎\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}
handler.help = ['translate', 'traducir']
handler.tags = ['General']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
