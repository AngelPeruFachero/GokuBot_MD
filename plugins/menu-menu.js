import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀 𝗕𝗕☀️!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`┏━━━━━━━━━━━━━━━━━━
┣┅⟣✦ 𝗛𝗼𝗹𝗮👋, 𝗦𝗼𝘆 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗠𝗗
┣┅⟣✦ 𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀: 𝙾𝚆𝙽𝙴𝚁  
┣┅⟣✦ 𝗢𝘄𝗻𝗲𝗿: 𝙴𝙽𝙳𝙴𝚁 𝙻𝙳
┣┅⟣✦ 𝗡𝘂𝗺𝗲𝗿𝗼:+505 5812 4470
┣┅⟣✦ 𝗙𝗲𝗰𝗵𝗮: ${date}
┣┅⟣✦ 𝗟𝗶𝗻𝗱𝗼 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙄𝙉𝙁𝙊 𝘿𝙀𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 
┗━━━━━━━━━━━━━━
┣┅⟣☆ 🕹️ 𝐍𝐈𝐕𝐄𝐋: ${level}
┣┅⟣☆ ✨ 𝐄𝐗𝐏𝐄𝐑𝐈𝐄𝐍𝐂𝐈𝐀: ${exp}
┣┅⟣☆ 🌐 𝐑𝐀𝐍𝐆𝐎: ${role}
┣┅⟣☆ 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒: ${limit}
┣┅⟣☆ 💰 𝐋𝐎𝐁𝐎𝐂𝐎𝐈𝐍𝐒: ${money}
┣┅⟣☆ 🔮 𝐓𝐎𝐊𝐄𝐍𝐒: ${joincount}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝘽𝙊𝙏 𝙊𝙁𝘾 𝙊 𝙎𝙐𝘽-𝘽𝙊𝙏
┗━━━━━━━━━━━━
┣🖥 𝐄𝐬𝐭𝐞 𝐞𝐬 𝐞𝐥 𝐛𝐨𝐭 𝐨𝐟𝐢𝐜𝐢𝐚𝐥
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙊 𝙀𝙍𝙍𝙊𝙍𝙀𝙎
┗━━━━━━━━━━━━━
┣🗃 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚
┣🗃 𝐅𝐢𝐦𝐠𝐞𝐱𝐢𝐦𝐚𝐠𝐞𝐬
┣🗃 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 𝐞𝐧 𝐞𝐬𝐩𝐞𝐫𝐚 (𝚘𝚠𝚗𝚎𝚛)
┣🗃 𝐝𝐬𝐨𝐰𝐧𝐞𝐫
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙄𝙉𝙁𝙊 𝘽𝙊𝙏
┗━━━━━━━━━━━━━━
┣📋 𝐡𝐞𝐥𝐩
┣📋 𝐓𝐲𝐜
┣📋 𝐆𝐫𝐮𝐩𝐨𝐬
┣📋 𝐄𝐬𝐭𝐚𝐝𝐨
┣📋 𝐈𝐧𝐟𝐨𝐛𝐨𝐭
┣📋 𝐒𝐩𝐞𝐞𝐝𝐭𝐞𝐬𝐭
┣📋 𝐃𝐨𝐧𝐚𝐫
┣📋 𝐎𝐰𝐧𝐞𝐫
┣📋 𝐒𝐜𝐫𝐢𝐩𝐭
┣📋 𝐁𝐨𝐭 (𝙿𝚛𝚎𝚏𝚒𝚓𝚘 ".")
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏
┗━━━━━━━━━━━━━
┣🚀 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫𝐛𝐨𝐭
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙐𝙉𝙀 𝘼 𝙇𝙊𝘽𝙊-𝘽𝙊𝙏 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊
┗━━━━━━━━━━━━━━━
┣📱 𝐉𝐨𝐢𝐧 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙀𝙍𝘽𝙊𝙏 - 𝙅𝘼𝘿𝙄𝘽𝙊𝙏
┗━━━━━━━━━━━━━
┣💻 𝐒𝐞𝐫𝐛𝐨𝐭
┣💻 𝐒𝐭𝐨𝐩
┣💻 𝐁𝐨𝐭𝐬
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙅𝙐𝙀𝙂𝙊𝙎
┗━━━━━━━━━━━━
┣🎪 𝐌𝐞𝐧𝐮𝐣𝐮𝐞𝐠𝐨𝐬
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝗧𝗥𝗨𝗘 - 𝗙𝗔𝗟𝗦𝗘
┗━━━━━━━━━━━
┣🌹 𝗧𝗿𝘂𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐰𝐞𝐥𝐜𝐨𝐦𝐞
┣🌹 𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐡𝐨𝐫𝐧𝐲
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝟐
┣🌹 𝗧𝗿𝘂𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐝𝐞𝐭𝐞𝐜𝐭
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐮𝐝𝐢𝐨𝐚
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐝𝐢𝐨𝐬
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐭𝐫𝐚𝐛𝐚
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐚𝐫𝐚𝐛𝐞𝐬
┣🌹 𝗧𝗿𝘂𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐦𝐨𝐝𝐨𝐚𝐝𝐦𝐢𝐧
┣🌹 𝗧𝗿𝘂𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
┣🌷 𝗙𝗮𝗹𝘀𝗲 𝐚𝐧𝐭𝐢𝐝𝐞𝐥𝐞𝐭𝐞
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ ⏤͟͟͞͞𝙍𝙀𝙋𝙊𝙍𝙏𝙀𝙎 
┗━━━━━━━━━━━
┣ 🖥 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
┗━━━━━━━━━━━━
┣🛰 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐆𝐢𝐭𝐜𝐥𝐨𝐧𝐞 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤𝐢𝐦𝐠 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐗𝐧𝐱𝐱𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐗𝐯𝐢𝐝𝐞𝐨𝐬𝐝𝐥 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕 
┣🛰 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐅𝐛 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐘𝐭𝐬𝐡𝐨𝐫𝐭 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐘𝐭𝐦𝐩𝟑 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐘𝐭𝐦𝐩𝟒 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐘𝐭𝐦𝐩𝟑𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐘𝐭𝐦𝐩𝟒𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐃𝐚𝐩𝐤𝟐 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤  𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣🛰 𝐏𝐥𝐚𝐲 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝟐 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲.𝟏𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲.𝟐𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐝𝐨𝐱 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐝𝐨𝐜𝟐 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐑𝐢𝐧𝐠𝐭𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐒𝐨𝐮𝐧𝐝𝐜𝐥𝐨𝐧𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐈𝐦𝐚𝐠𝐞 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝚝𝚎𝚡𝚝𝚘
┣🛰 𝐩𝐩𝐭𝐢𝐤𝐭𝐨𝐤 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐈𝐠𝐬𝐭𝐚𝐥𝐥 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐢𝐠𝐬𝐭𝐨𝐫𝐲 𝚗𝚘𝚖𝚋𝚛𝚎 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘
┣🛰 𝐓𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐥 𝚞𝚜𝚎𝚛𝚗𝚊𝚖𝚎
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍𝙀𝙎
┗━━━━━━━━━━━━━
┣🔎 𝐆𝐢𝐭𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐏𝐞𝐥𝐢𝐬𝐩𝐥𝐮𝐬 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐌𝐨𝐝𝐚𝐩𝐤 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬𝐞𝐚𝐫𝐜𝐡𝟐 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐗𝐧𝐱𝐱𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐀𝐧𝐢𝐦𝐞𝐢𝐧𝐟𝐨 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐆𝐨𝐨𝐠𝐥𝐞 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐋𝐞𝐭𝐫𝐚 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐘𝐭𝐬𝐞𝐚𝐫𝐜𝐡 𝚝𝚎𝚡𝚝𝚘
┣🔎 𝐏𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙂𝙍𝙐𝙋𝙊𝙎 𝘼𝙅𝙐𝙎𝙏𝙀𝙎
┗━━━━━━━━━━
┣⚙️ 𝐀𝐝𝐝 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚙️ 𝐊𝐢𝐜𝐤 @𝚝𝚊𝚐
┣⚙️ 𝐊𝐢𝐜𝐤𝟐 @𝚝𝚊𝚐
┣⚙️ 𝐋𝐢𝐬𝐭𝐚𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐊𝐢𝐜𝐤𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐆𝐫𝐮𝐩𝐨 𝚊𝚋𝚛𝚒𝚛 / 𝚌𝚎𝚛𝚛𝚊𝚛
┣⚙️ 𝐆𝐫𝐨𝐮𝐩𝐭𝐢𝐦𝐞 𝚘𝚙𝚌𝚒𝚘𝚗 𝚝𝚒𝚎𝚖𝚙𝚘
┣⚙️ 𝐏𝐫𝐨𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐀𝐝𝐦𝐢𝐧𝐬 𝚝𝚎𝚡𝚝𝚘 (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⚙️ 𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ 𝐈𝐧𝐟𝐨𝐠𝐫𝐨𝐮𝐩
┣⚙️ 𝐑𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤
┣⚙️ 𝐋𝐢𝐧𝐤
┣⚙️ 𝐒𝐞𝐭𝐧𝐚𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐝𝐞𝐬𝐜 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐈𝐧𝐯𝐨𝐜𝐚𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐒𝐞𝐭𝐛𝐲𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚝𝚎𝚡𝚝𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚊𝚞𝚍𝚒𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚟𝚒𝚍𝚎𝚘
┣⚙️ 𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚙️ 𝐖𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ 𝐔𝐧𝐰𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ 𝐋𝐢𝐬𝐭𝐰𝐚𝐫𝐧
┣⚙️ 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┣⚙️ 𝐃𝐞𝐬𝐭𝐫𝐚𝐛𝐚
┣⚙️ 𝐒𝐞𝐭𝐩𝐩𝐩 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍𝙀𝙎
┗━━━━━━━━━━
┣🧶 𝐓𝐨𝐢𝐦𝐚𝐠𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
┣🧶 𝐓𝐨𝐠𝐢𝐟𝐚𝐮𝐝 𝚟𝚒𝚍𝚎𝚘
┣🧶 𝐓𝐨𝐢𝐦𝐠 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┣🧶 𝐓𝐨𝐦𝐩𝟑 𝚟𝚒𝚍𝚎𝚘
┣🧶 𝐓𝐨𝐦𝐩𝟑 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣
┣🧶 𝐓𝐨𝐩𝐩 𝚟𝚒́𝚍𝚎𝚘 / 𝚊𝚞𝚍𝚒𝚘
┣🧶 𝐓𝐨𝐯𝐢𝐝𝐞𝐨 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
┣🧶 𝐓𝐨𝐮𝐫𝐥 𝚟𝚒𝚍𝚎𝚘 / 𝚒𝚖𝚊𝚐𝚎𝚗 / 𝚊𝚞𝚍𝚒𝚘
┣🧶 𝐓𝐭𝐬 𝚒𝚍𝚒𝚘𝚖𝚊 𝚝𝚎𝚡𝚝𝚘
┣🧶 𝐓𝐭𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙇𝙊𝙂𝙊𝙎-𝙀𝙁𝙀𝘾𝙏𝙊𝙎
┗━━━━━━━━━━
┣🖼 𝐋𝐨𝐠𝐨𝐬 𝚎𝚏𝚎𝚌𝚝𝚘 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐋𝐨𝐠𝐨𝐜𝐡𝐫𝐢𝐬𝐦𝐚𝐬𝐭 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐋𝐨𝐠𝐨𝐜𝐨𝐫𝐚𝐳𝐨𝐧 𝚝𝚎𝚡𝚝𝚘
┣🖼 𝐘𝐭𝐜𝐨𝐦𝐦𝐞𝐧𝐭 𝚝𝚎𝚡𝚝𝚘_
┣🖼 𝐇𝐨𝐫𝐧𝐲𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
┣🖼 𝐒𝐢𝐦𝐩𝐜𝐚𝐫𝐝 @𝚝𝚊𝚐
┣🖼 𝐋𝐨𝐥𝐢𝐜𝐞 @𝚝𝚊𝚐
┣🖼 𝐢𝐭𝐬𝐬𝐨𝐬𝐭𝐮𝐩𝐢𝐝
┣🖼 𝐏𝐢𝐱𝐞𝐥𝐚𝐫
┣🖼 𝐁𝐥𝐮𝐫
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙋𝙄𝙍𝙊𝙋𝙊𝙎
┗━━━━━━━━━━
┣✏️ 𝐏𝐢𝐫𝐨𝐩𝐨
┣✏️ 𝐂𝐨𝐧𝐬𝐞𝐣𝐨
┣✏️ 𝐅𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┣✏️ 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙍𝘼𝙉𝘿-𝘼𝙉𝙄𝙈𝙀𝙎
┗━━━━━━━━━━
┣📓 𝐌𝐞𝐧𝐮𝐚𝐧𝐢𝐦𝐞𝐬
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙍𝘼𝙉𝘿𝙊𝙈
┗━━━━━━━━━━
┣📺  𝐊𝐩𝐨𝐩 𝙱𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔 / 𝚎𝚡𝚘 / 𝚋𝚝𝚜
┣📺 𝐜𝐫𝐢𝐬𝐭𝐢𝐚𝐧𝐨𝐫𝐨𝐧𝐚𝐥𝐝𝐨
┣📺 𝐦𝐞𝐬𝐬𝐢
┣📺 𝐜𝐚𝐭
┣📺 𝐝𝐨𝐠
┣📺 𝐦𝐞𝐦𝐞
┣📺 𝐢𝐭𝐳𝐲
┣📺 𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
┣📺 𝐧𝐚𝐯𝐢𝐝𝐚𝐝
┣📺 𝐰𝐩𝐦𝐨𝐧𝐭𝐚𝐧̃𝐚
┣📺 𝐩𝐮𝐛𝐠
┣📺 𝐰𝐩𝐠𝐚𝐦𝐢𝐧𝐠
┣📺𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜
┣📺 𝐰𝐩𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜𝟐
┣📺 𝐰𝐩𝐫𝐚𝐧𝐝𝐨𝐦
┣📺 𝐰𝐚𝐥𝐥𝐡𝐩
┣📺𝐰𝐩𝐯𝐞𝐡𝐢𝐜𝐮𝐥𝐨
┣📺 𝐰𝐩𝐦𝐨𝐭𝐨
┣📺 𝐜𝐨𝐟𝐟𝐞𝐞
┣📺 𝐩𝐞𝐧𝐭𝐨𝐥
┣📺 𝐜𝐚𝐫𝐢𝐜𝐚𝐭𝐮𝐫𝐚
┣📺 𝐜𝐢𝐛𝐞𝐫𝐞𝐬𝐩𝐚𝐜𝐢𝐨
┣📺 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
┣📺 𝐝𝐨𝐫𝐚𝐞𝐦𝐨𝐧
┣📺 𝐡𝐚𝐜𝐤𝐞𝐫
┣📺 𝐩𝐥𝐚𝐧𝐞𝐭𝐚
┣📺 𝐫𝐚𝐧𝐝𝐨𝐦𝐩𝐫𝐨𝐟𝐢𝐥𝐞
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝘾𝙊𝙈 +𝟏𝟖
┗━━━━━━━━━━
┣📒 𝐋𝐚𝐛𝐢𝐛𝐥𝐢𝐚
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙀𝙁𝙀𝘾𝙏-𝘼𝙐𝘿𝙄𝙊𝙎
┗━━━━━━━━━━
┃𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉
┣🔊 𝐛𝐚𝐬𝐬
┣🔊 𝐛𝐥𝐨𝐰𝐧
┣🔊 𝐝𝐞𝐞𝐩
┣🔊 𝐞𝐚𝐫𝐫𝐚𝐩𝐞
┣🔊 𝐟𝐚𝐬𝐭
┣🔊 𝐟𝐚𝐭
┣🔊 𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞
┣🔊 𝐫𝐞𝐯𝐞𝐫𝐬𝐞
┣🔊 𝐫𝐨𝐛𝐨𝐭
┣🔊 𝐬𝐥𝐨𝐰
┣🔊 𝐬𝐦𝐨𝐨𝐭𝐡
┣🔊 𝐭𝐮𝐩𝐚𝐢
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘾𝙃𝘼𝙏 𝘼𝙉𝙊𝙉𝙄𝙈𝙊
┗━━━━━━━━━━
┣✔️ 𝐒𝐭𝐚𝐫𝐭
┣✔️ 𝐍𝐞𝐱𝐭
┣✔️ 𝐋𝐞𝐚𝐯𝐞
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘼𝙐𝘿𝙄𝙊𝙎
┗━━━━━━━━━━
┣📕 𝐌𝐞𝐧𝐮𝐚𝐮𝐝𝐢𝐨𝐬
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎
┗━━━━━━━━━━
┣⚒️ 𝐂𝐡𝐚𝐭𝐠𝐩𝐭 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐝𝐞𝐥𝐜𝐡𝐚𝐭𝐠𝐩𝐭
┣⚒️ 𝐠𝐩𝐭𝐯𝐨𝐳 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐝𝐚𝐥𝐥-𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐬𝐩𝐚𝐦𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘 𝚝𝚎𝚡𝚝𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣⚒️ 𝐭𝐚𝐦𝐚𝐧̃𝐨 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞 𝚒𝚖𝚊𝚐𝚎𝚗  𝚟𝚒𝚍𝚎𝚘
┣⚒️ 𝐜𝐥𝐢𝐦𝐚 𝚙𝚊𝚒́𝚜 𝚌𝚒𝚞𝚍𝚊𝚍
┣⚒️ 𝐞𝐧𝐜𝐮𝐞𝐬𝐭𝐚 𝚝𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
┣⚒️ 𝐚𝐟𝐤 𝚖𝚘𝚝𝚒𝚟𝚘
┣⚒️ 𝐨𝐜𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚒️ 𝐡𝐝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣⚒️ 𝐚𝐜𝐨𝐫𝐭𝐚𝐫 𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣⚒️ 𝐜𝐚𝐥𝐜 𝚘𝚙𝚎𝚛𝚊𝚌𝚒𝚘𝚗 𝚖𝚊𝚝𝚑
┣⚒️ 𝐝𝐞𝐥 𝚖𝚎𝚗𝚜𝚊𝚓𝚎
┣⚒️ 𝐰𝐡𝐚𝐭𝐦𝐮𝐬𝐢𝐜 𝚊𝚞𝚍𝚒𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐪𝐫 𝚒𝚖𝚊𝚐𝚎𝚗 𝚀𝚁
┣⚒️ 𝐪𝐫𝐜𝐨𝐝𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 𝚝𝚎𝚡𝚝𝚘𝟸
┣⚒️ 𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚒️ 𝐧𝐨𝐰𝐚 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚒️ 𝐜𝐨𝐯𝐢𝐝 𝚙𝚊𝚒́𝚜
┣⚒️ 𝐡𝐨𝐫𝐚𝐫𝐢𝐨
┣⚒️ 𝐝𝐝𝐫𝐨𝐩𝐦𝐚𝐢𝐥
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙍𝙋𝙂-𝙇𝙄𝙈𝙄𝙏𝙀𝙎-𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼
┗━━━━━━━━━━
┣🎪 𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐞𝐞
┣🎪 𝐜𝐚𝐳𝐚𝐫
┣🎪 𝐜𝐨𝐟𝐫𝐞
┣🎪 𝐛𝐚𝐥𝐚𝐧𝐜𝐞
┣🎪 𝐜𝐥𝐚𝐢𝐦
┣🎪 𝐡𝐞𝐚𝐥
┣🎪 𝐥𝐛
┣🎪 𝐥𝐞𝐯𝐞𝐥𝐮𝐩
┣🎪 𝐦𝐲𝐧𝐬
┣🎪 𝐩𝐞𝐫𝐟𝐢𝐥
┣🎪 𝐰𝐨𝐫𝐤
┣🎪 𝐦𝐢𝐧𝐚𝐫
┣🎪 𝐦𝐢𝐧𝐚𝐫𝟐
┣🎪 𝐛𝐮𝐲
┣🎪 𝐛𝐮𝐲𝐚𝐥𝐥
┣🎪 𝐯𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐫
┣🎪𝐫𝐨𝐛𝐚𝐫 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
┣🎪 𝐭𝐫𝐚𝐧𝐬𝐟𝐞𝐫 𝚝𝚒𝚙𝚘 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍 @𝚝𝚊𝚐
┣🎪 𝐮𝐧𝐫𝐞𝐠 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚜𝚎𝚛𝚒𝚎
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
┗━━━━━━━━━━
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭  𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚟𝚒𝚍𝚎𝚘 
┣🍭  𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝟐 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐬 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐬𝟐 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🍭 𝐬𝟐 𝚎𝚗𝚕𝚊𝚌𝚎 / 𝚕𝚒𝚗𝚔 / 𝚞𝚛𝚕
┣🍭 𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱 𝚎𝚖𝚘𝚓𝚒𝟷 𝚎𝚖𝚘𝚓𝚒𝟸
┣🍭 𝐬𝐜𝐢𝐫𝐜𝐥𝐞 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐬𝐫𝐞𝐦𝐨𝐯𝐞𝐛𝐪 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐬𝐞𝐦𝐨𝐣𝐢 𝚝𝚒𝚙𝚘 𝚎𝚖𝚘𝚓𝚒
┣🍭 𝐪𝐜 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐚𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟐 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟑 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟒 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐭𝐭𝐩𝟓 𝚝𝚎𝚡𝚝𝚘
┣🍭 𝐩𝐚𝐭 @𝚝𝚊𝚐
┣🍭 𝐬𝐥𝐚𝐩 @𝚝𝚊𝚐
┣🍭 𝐤𝐢𝐬𝐬 @𝚝𝚊𝚐
┣🍭 𝐝𝐚𝐝𝐨
┣🍭 𝐰𝐦 𝚙𝚊𝚌𝚔𝚗𝚊𝚖𝚎 𝚊𝚞𝚝𝚑𝚘𝚛
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐚𝐫𝐤𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 <𝚒𝚖𝚊𝚐𝚗
┣🍭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐟𝐢𝐥𝐭𝐞𝐫 𝚎𝚏𝚎𝚌𝚝𝚘 𝚒𝚖𝚊𝚐𝚎𝚗
┣🍭 𝐜𝐚𝐫𝐭𝐨𝐨𝐧 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙊𝙒𝙉𝙀𝙍-𝗦𝗧𝗔𝗙𝗙
┗━━━━━━━━━━
┣📘 𝐦𝐞𝐧𝐮𝐨𝐰𝐧𝐞𝐫
┗━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆ 𝗟𝗢𝗕𝗢 - 𝗕𝗢𝗧 - 𝗠𝗗 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
