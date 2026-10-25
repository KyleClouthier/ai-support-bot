import { config } from '@/lib/config';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const r = await fetch(`${process.env.OPENAI_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: config.model, messages }),
  });
  return new Response(r.body, { status: r.status, headers: { 'Content-Type': 'application/json' } });
}
