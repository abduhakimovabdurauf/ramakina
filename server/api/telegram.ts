export default defineEventHandler(async (event) => {
  const body = await readBody<{ text: string }>(event)

  const TELEGRAM_BOT_TOKEN = '7036105215:AAGvs4pnsJgVaPR3KBlAvxluGo5cJKZ6m5o'
  const CHAT_ID = '-4691563768'

  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: body.text,
      parse_mode: 'Markdown'
    })
  })

  const data = await res.json()
  return data
})