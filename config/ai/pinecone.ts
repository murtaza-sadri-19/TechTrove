import { Pinecone } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_API_KEY) {
  throw new Error('Missing PINECONE_API_KEY environment variable');
}

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  environment: process.env.PINECONE_ENVIRONMENT || 'us-west1-gcp',
});

export const pineconeConfig = {
  indexName: process.env.PINECONE_INDEX_NAME || 'techtrove-embeddings',
  environment: process.env.PINECONE_ENVIRONMENT || 'us-west1-gcp',
  dimension: 1536, // OpenAI embedding dimension
  metric: 'cosine' as const,
  namespace: {
    projects: 'projects',
    skills: 'skills',
    experience: 'experience',
    blog: 'blog',
  },
} as const;

export async function getIndex() {
  return pinecone.Index(pineconeConfig.indexName);
}