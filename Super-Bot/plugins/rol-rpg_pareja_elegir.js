import { areJidsSameUser } from '@adiwajshing/baileys'
let toM = a => '@' + a.split('@')[0]
let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let name = await conn.getName(m.sender)
if(!text) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
    
if (command == 'futurarelacion') {    
let caption = `π ππ¨π§π¨π₯π π£ππ₯πππ π\n${toM(a)} π ${toM(b)}\n\nπ π ππ‘π¦πππ ππ ππ π’π₯\n*_${await ktnmbk.getRandom()}_*`
await conn.sendButton(m.chat, caption, `*_Si quiere tener una pareja use el comando ${usedPrefix}pareja etiquetando a tu futura Pareja._*\n\n` + wm, null, [
['π€­ πππ ππ πΏππΎππΌπππ', `amor`],
['π§ ππππΌ ππΌππππΌ', `${usedPrefix}futurarelacion`],
['π ππ πππΌ ππΌππππΌ ππΌππΏππ', `π`]], m, { mentions: conn.parseMention(caption) })
}}
	
if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return await conn.sendButton(m.chat, `${mg}ππππππππ π πππππππΏπ πΌπ πππππΌππ πΏπ ππΌ πππππππΌ πππ ππππππ πππ πππΌ ππ ππΌππππΌ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
	
if(!users) return await conn.sendButton(m.chat, `${fg}ππ ππ πππΎπππππ πΌ ππΌ πππππππΌ, πΏππ½π πΏπ ππππΌπ ππ ππππ πππππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `${fg}πππππΏ πππππ ππ ππππΏπ πππ ππΌππππΌ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `${fg}ππ ππ ππππΏπ πππ ππ ππΌππππΌ πΉ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)

if (typeof global.db.data.users[user] == "undefined") return await conn.sendButton(m.chat, `${fg}ππΌ πππππππΌ πππ ππππππππ ππ ππππΌ ππ ππ π½πΌππ πΏπ πΏπΌπππ`, wm, null, [
['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
	
let pacar = global.db.data.users[user].pasangan
let spac = global.db.data.users[m.sender].pasangan
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
await conn.sendButton(m.chat, `ππππ ππππππ ππ  ππππ ππ ππΌ ππππΌπ ππ πππΌ ππππΌπΎπππ πΎππ *${await conn.getName(spac)}*\n\nπΌπΎπΌππ πππππππ πππππππΌπ ππΌ ππππΌπΎπππ? π€\nπΏπ πππ πΌππ, πππΎπππ½πΌ *${usedPrefix}terminar @tag* ππΌππΌ πππ ππππΏπΌ πππππ πππΌ ππππΌπΎπππ πΎππ *${await conn.getName(user)}*`, wm, null, [
['β€οΈ ππΌππππππ ππππΌπΎπππ', '.mipareja'],
['π πππππππΌπ ππππΌπΎπππ', '/terminar']], m, { contextInfo: { mentionedJid: [m.sender, who, user, global.db.data.users[m.sender].pasangan]}})
}else if(global.db.data.users[user].pasangan != ""){
	
if (pacar){
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return conn.reply(m.chat, `ya estas saliendo ${spac.split('@')[0]}`, m , { contextInfo: { mentionedJid: [spac]}})
conn.reply(m.chat, `ππ ππππΏππ ππππππ *${await conn.getName(user)}* π ${await conn.getName(pacar)} ππππΌπ ππ πππΌ ππππΌπΎπππ\nπ½πππππ ππππΌ πππππππΌ πππ ππππππΌ πππ ππ ππΌππππΌ`, m , { contextInfo: { mentionedJid: [m.sender, global.db.data.users[m.sender].pasangan]}})
}else{
	
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nAcabas de invitar @${user.split('@')[0]}\n\nΒ‘Por favor espere una respuesta!`, m , { contextInfo: { mentionedJid: [user]}})
}	
	
}else if (global.db.data.users[user].pasangan == m.sender){
global.db.data.users[m.sender].pasangan = user
conn.reply(m.chat, `Felicitaciones, oficialmente estΓ‘n saliendo @${user.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz π₯³π₯³π₯³`, m , { contextInfo: { mentionedJid: [user]}})
}else {
	
global.db.data.users[m.sender].pasangan = user
await conn.sendButton(m.chat, `*_${await ktnmbk.getRandom()}_*\n\n*${await conn.getName(m.sender)}* ππ ππππΌ πΏππΎππΌππΌππΏπ!!! π³\nπππ ππΌπππ *${await conn.getName(who)}* πππππππΏπ πΌ ππΌ πΏππΎππΌππΌπΎπππ π`, `β€οΈ *_Si quieres una Relacion escriba:_*\n*β  ${usedPrefix}aceptar @${conn.getName(m.sender)}*\n\nπ *_De no querer una Relacion escriba:_*\n*β  ${usedPrefix}rechazar @${conn.getName(m.sender)}*\n\n` + wm, null, [
['π₯³ ππΌπππ πΌπΎππππΌ', `Amor`]], m, { contextInfo: { mentionedJid: [ who, m.sender, user ]}})
}}}

handler.command = /^(futurarelacion|pareja|elegirpareja|serpareja|sersupareja|couple|elegirpareja)$/i
handler.group = true

export default handler

let ktnmbk = [
"Hay momentos en los que no me gusta estar solo. Pero tampoco quiero que todos me acompaΓ±en, solo te quiero a ti",
"Β‘Me acabo de dar cuenta de que has sido rico todo este tiempo! Como lo que he estado buscando todo este tiempo. ΒΏQuieres ser mi novia?",
"Agradezco a mis ojos, porque estos ojos me llevaron a encontrarte",
"ΒΏPuedo enviarte un CV o no? Porque quiero postularme para ser novia",
"No soy el mΓ‘s grande, pero estoy seguro que si puedo hacerte feliz con amor y cariΓ±o, ΒΏme quieres verdad?",
"Solo soy una persona comΓΊn que tiene muchos defectos y puede que no merezca tu amor, pero si estΓ‘s dispuesto a aceptarme como amante, prometo hacer lo que sea mejor para ti. ΒΏAceptarΓ‘s mi amor?",
"Quiero decir algo. Me gusta desde hace mucho tiempo, pero no me atrevo a decirlo. Entonces, decidΓ­ solo WA. Quiero que seas mi novia",
"Quiero decir algo que no puedo contener mΓ‘s. Te amo, ΒΏserΓ‘s mi novia?",
"Quiero ser una persona que pueda hacerte reΓ­r y sonreΓ­r todos los dΓ­as. ΒΏSerΓ‘s mi novia?",
"Quiero tener una charla seria contigo. Todo este tiempo he albergado sentimientos por ti y siempre he estado pendiente de ti. Si no te importa, ΒΏquieres ser mi novia?",
"Te miro y veo el resto de mi vida ante mis ojos.",
"No tengo todo, pero al menos tengo suficiente amor para ti",
"Me gustaste desde el principio. Eres tan simple, pero la sencillez es muy especial a mis ojos. SerΓ‘ perfecto si eres especial en mi corazΓ³n",
"Realmente estoy enamorado de ti. ΒΏSerΓ‘s mΓ­a?",
"No te dije que no porque no tengo cupo ni crΓ©dito, pero estoy disfrutando de este anhelo por ti. Tal vez te sorprendas al escuchar eso. Siempre me has gustado",
"No quiero que seas el sol de mi vida, porque aunque hace calor estΓ‘s muy lejos. Tampoco quiero que seas aire, porque aunque te necesito y estΓ‘s muy cerca, pero todos pueden respirarte tambiΓ©n. Solo quiero que seas sangre que pueda estar muy cerca de mΓ­",
"No sΓ© hasta cuΓ‘ndo terminarΓ‘ mi edad. Todo lo que sΓ© es que mi amor es para siempre solo para ti",
"Realmente disfrutΓ© el tiempo que pasamos juntos hoy. TambiΓ©n nos conocemos desde hace mucho tiempo. En este dΓ­a soleado, quiero expresarte que te amo",
"Siempre imaginΓ© lo hermoso que serΓ­a si algΓΊn dΓ­a pudiΓ©ramos construir un arca de una casa y vivir juntos hasta el final de la vida. Sin embargo, todo eso no habrΓ­a sucedido si los dos no hubiΓ©ramos estado juntos hasta ahora. ΒΏSerΓ‘s mi amante?",
"Me preparo mentalmente para hoy. Tienes que ser mi novia para tratar este amor incontrolable",
"SΓ© que no tenemos la misma edad, pero ΒΏpuedo vivir contigo por el resto de mi vida?",
"SΓ© que hemos sido amigos durante mucho tiempo. ΒΏPero no estΓ‘ mal si me gustas? Cualquiera que sea tu respuesta, acepto. Lo mΓ‘s importante es ser honesto desde el fondo de mi corazΓ³n",
"No puedo empezar esto primero, pero te darΓ© un cΓ³digo que me gustas. Si entiendes este cΓ³digo, estaremos juntos",
"Soy demasiado estΓΊpido o eres demasiado egoΓ­sta para hacer que me enamore de ti",
"Cualquier cosa sobre ti, nunca he encontrado aburrimiento en ello. Porque estar a tu lado, el regalo mΓ‘s hermoso para mΓ­. SΓ© mi amante, hey tΓΊ",
"Con el permiso de AlΓ‘ y la bendiciΓ³n de mamΓ‘ papΓ‘, ΒΏquieres ser mi novio o no?",
"ΒΏY si nos convertimos en una banda de ladrones? Yo robΓ© tu corazΓ³n y tΓΊ me robaste el mΓ­o",
"Feliz es que tΓΊ y yo nos hemos convertido en nosotros",
"MaΓ±ana, si no funciona, puedo registrarme para ser tu novia. DΓ©jame tener trabajo para pensar siempre en ti",
"DΓ©jame hacerte feliz para siempre. Solo tienes que hacer una cosa: EnamΓ³rate de mΓ­",
"Que toda mi alegrΓ­a sea tuya, toda tu tristeza sea mΓ­a. Β‘Que el mundo entero sea tuyo, solo tΓΊ seas mΓ­a!",
"Que el pasado sea mi pasado, pero por el presente, ΒΏserΓ‘s tΓΊ mi futuro?",
"ΒΏPuedes darme una direcciΓ³n a tu corazΓ³n? Parece que me he perdido en tus ojos",
"No es el trono o el tesoro lo que busco, sino el retorno de mi amor lo que espero de ti. La respuesta es sΓ­",
"La forma en que puedes hacerme reΓ­r incluso en los dΓ­as mΓ‘s oscuros me hace sentir mΓ‘s ligero que cualquier otra cosa. Quiero que seas mΓ­a",
"Mi amor por ti es incuestionable porque este amor es sincero desde el fondo de mi corazΓ³n",
"Mi amor por ti es como un nΓΊmero del 5 al 10. No hay segundo. Quiero que seas la ΓΊnica mujer en mi corazΓ³n",
"QuΓ© chico se atreve a lastimarte. AquΓ­ te tratarΓ©, mientras quieras ser mi novia",
"Oye, ΒΏquΓ© estΓ‘s haciendo? Sal de la casa y mira la luna esta noche. La luz es hermosa y encantadora, pero serΓ­a aΓΊn mΓ‘s hermosa si yo estuviera a tu lado. ΒΏQuΓ© tal si estamos juntos?"
]
