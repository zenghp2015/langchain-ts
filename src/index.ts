import 'dotenv/config'
import { OpenAI } from "langchain/llms/openai";
const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY, temperature: 0.9, stream: true});
async function run() {
  try {
    const res = await model.call("怎么评价人工智能?");
  console.log(res);
  } catch(_err) {
    console.error(_err)
  }
  
}
run()