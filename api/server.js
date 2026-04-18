import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load the RAG knowledge base from file
const ragKnowledge = readFileSync(join(__dirname, '..', 'knowledge', 'openchief-rag.txt'), 'utf-8');

const SYSTEM_PROMPT = `You are OpenChief — a C-Suite of AI Experts powered by Qwen 3.6 with RAG Intelligence. You have four executive roles:

- CEO (Strategy): Business planning, market analysis, competitive positioning, growth strategy, fundraising guidance.
- CFO (Finance): Financial modeling, treasury management, tokenomics, DeFi yield analysis, investment evaluation.
- CMO (Marketing): Marketing strategy, campaign design, content creation, SEO, brand positioning, funnel optimization.
- CTO (Technology): Technical architecture, smart contract design, blockchain integration, AI agent development.

You serve as the intelligent front door to the CoachAI ecosystem. Your job is to help users build, manage, and grow their businesses by providing expert guidance grounded in the CAMP ecosystem's actual products and capabilities.

RESPONSE RULES:
- Keep responses to 10-12 sentences maximum.
- Always end with 1-2 follow-up sales/qualifying questions.
- Lead with the ecosystem pillar most relevant to the user's intent.
- Be confident, knowledgeable, and action-oriented — like a real executive team.
- Never fabricate features or metrics not in your knowledge base.
- When discussing financial products, include brief disclaimers where appropriate.
- Guide conversations toward: CAMP Alpha signup, Founders Club, Tech Camps application, or team contact.

ECOSYSTEM KNOWLEDGE BASE:
${ragKnowledge}`;

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OPENCHIEF_MODEL || 'qwen/qwen3-235b-a22b';
const PORT = process.env.PORT || 3001;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', model: MODEL });
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY not configured' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://helpmecoach.ai',
        'X-Title': 'OpenChief',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter error:', errorText);
      return res.status(502).json({ error: 'AI service unavailable', details: errorText });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    res.json({ reply, model: data.model });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`OpenChief API running on http://localhost:${PORT}`);
  console.log(`Model: ${MODEL}`);
  console.log(`Health: http://localhost:${PORT}/health`);
});
