import { HfInference } from '@huggingface/inference';

if (!process.env.HUGGINGFACE_API_KEY) {
  throw new Error('Missing HUGGINGFACE_API_KEY environment variable');
}

export const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const huggingFaceConfig = {
  models: {
    textGeneration: 'mistralai/Mistral-7B-Instruct-v0.1',
    textClassification: 'cardiffnlp/twitter-roberta-base-sentiment-latest',
    imageClassification: 'google/vit-base-patch16-224',
    objectDetection: 'facebook/detr-resnet-50',
    imageToText: 'nlpconnect/vit-gpt2-image-captioning',
    summarization: 'facebook/bart-large-cnn',
    translation: 'Helsinki-NLP/opus-mt-en-fr',
  },
} as const;