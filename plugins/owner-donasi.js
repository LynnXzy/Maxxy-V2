import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let str = `${conn.getName(m.sender)}
Want Support Bot?

*[ PAYMENT METHOD ]*

- Topup(Digi): *${pulsa}*
- Topup(Maxis): *${dana}*
- Paypal: *${paypal}*
- Link: *${saweria}*
- Owner: *Wa.me/+60189830350*

Setelah melakukan donasi kirim bukti pembayaran ke owner
`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: fsizedoc,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: str,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
