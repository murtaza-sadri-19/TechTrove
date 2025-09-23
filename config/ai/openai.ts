import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_ID,
});

export const openaiConfig = {
  models: {
    gpt4: 'gpt-4-turbo-preview',
    gpt35: 'gpt-3.5-turbo',
    embedding: 'text-embedding-ada-002',
    dalle: 'dall-e-3',
  },
  maxTokens: {
    completion: 4096,
    embedding: 8191,
  },
} as const;