'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  async function send() {
    const r = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ messages: [{ role: 'user', content: input }] }) });
    const j = await r.json();
    setReply(j.choices?.[0]?.message?.content ?? 'Something went wrong.');
  }
  return (
    <main style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>Support</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={4} style={{ width: '100%' }} />
      <button onClick={send}>Ask</button>
      <p>{reply}</p>
    </main>
  );
}
