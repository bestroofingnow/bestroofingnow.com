/**
 * Groq API client for fast LLM inference.
 * Used for organizing DataForSEO data into structured SEO analysis.
 *
 * Models:
 *   - meta-llama/llama-4-maverick-17b-128e-instruct (default — fast, capable)
 *   - gpt-oss-120b (deep analysis)
 *
 * Env: GROQ_API_KEY
 */

import Groq from 'groq-sdk';

let groqClient: Groq | null = null;

function getGroq(): Groq {
  if (!groqClient) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('GROQ_API_KEY env var is not configured');
    }
    groqClient = new Groq({ apiKey });
  }
  return groqClient;
}

export type GroqModel = 'meta-llama/llama-4-maverick-17b-128e-instruct' | 'qwen/qwen3-32b';

/**
 * Call Groq for structured JSON output.
 * Returns parsed JSON from the LLM response.
 */
export async function groqJSON<T>(
  prompt: string,
  options: {
    model?: GroqModel;
    maxTokens?: number;
    temperature?: number;
  } = {},
): Promise<T> {
  const {
    model = 'meta-llama/llama-4-maverick-17b-128e-instruct',
    maxTokens = 4000,
    temperature = 0.3,
  } = options;

  const groq = getGroq();

  const response = await groq.chat.completions.create({
    model,
    max_tokens: maxTokens,
    temperature,
    messages: [
      {
        role: 'system',
        content: 'You are an SEO analyst. Always respond with valid JSON only, no markdown fences or extra text.',
      },
      { role: 'user', content: prompt },
    ],
  });

  const text = response.choices[0]?.message?.content || '';

  // Extract JSON from response (handle cases where model wraps in markdown)
  const jsonMatch = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('Failed to parse JSON from Groq response');
  }

  return JSON.parse(jsonMatch[0]) as T;
}

/**
 * Call Groq for text output (no JSON parsing).
 */
export async function groqText(
  prompt: string,
  options: {
    model?: GroqModel;
    maxTokens?: number;
    temperature?: number;
    systemPrompt?: string;
  } = {},
): Promise<string> {
  const {
    model = 'meta-llama/llama-4-maverick-17b-128e-instruct',
    maxTokens = 4000,
    temperature = 0.5,
    systemPrompt = 'You are an SEO analyst for a roofing company in Charlotte, NC.',
  } = options;

  const groq = getGroq();

  const response = await groq.chat.completions.create({
    model,
    max_tokens: maxTokens,
    temperature,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt },
    ],
  });

  return response.choices[0]?.message?.content || '';
}
