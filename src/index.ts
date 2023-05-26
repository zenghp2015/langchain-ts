import 'dotenv/config'
import { OpenAI } from "langchain/llms/openai";

const openAIApiKey = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openAIApiKey, temperature: 0.9 });
console.info(model)