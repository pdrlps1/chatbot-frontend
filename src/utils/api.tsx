// src/api.ts

const API_URL = 'http://localhost:3001'

export async function pingAPI() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Falha ao conectar')
  return res.json()
}

export async function sendMessage(message: string) {
  const res = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  })
  if (!res.ok) throw new Error('Falha ao conectar')
  return res.json()
}
